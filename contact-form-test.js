import { chromium } from 'playwright';

(async () => {
  console.log('Starting contact form test...');
  
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  
  // Enable request/response logging
  context.on('request', request => {
    if (request.url().includes('/api/contact')) {
      console.log(`>> Request: ${request.method()} ${request.url()}`);
      console.log(`>> Request headers:`, request.headers());
      const postData = request.postData();
      if (postData) {
        try {
          const jsonData = JSON.parse(postData);
          console.log('>> Request data:', jsonData);
        } catch (e) {
          console.log('>> Request data (raw):', postData);
        }
      }
    }
  });
  
  context.on('response', async response => {
    if (response.url().includes('/api/contact')) {
      console.log(`<< Response: ${response.status()} ${response.statusText()}`);
      console.log(`<< Response headers:`, response.headers());
      try {
        const body = await response.json();
        console.log('<< Response body:', body);
      } catch (e) {
        console.log('<< Response body: Could not parse as JSON');
        try {
          const text = await response.text();
          console.log('<< Response text:', text);
        } catch (err) {
          console.log('<< Response body: Could not get text');
        }
      }
    }
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to the website
    console.log('Navigating to the website...');
    await page.goto('https://www.aio-consulting.de/');
    
    // Scroll to the contact form
    console.log('Scrolling to the contact form...');
    await page.evaluate(() => {
      document.getElementById('kontakt').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Wait for the form elements to be visible
    await page.waitForSelector('#name');
    
    // Fill in the form
    console.log('Filling out the contact form...');
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#message', 'This is a test message from Playwright. Please ignore this message.');
    
    // Submit the form and capture network activity
    console.log('Submitting the form...');
    
    // Create a promise to wait for the response
    const responsePromise = page.waitForResponse(response => 
      response.url().includes('/api/contact') && response.request().method() === 'POST'
    );
    
    // Click the submit button
    await page.click('button[type="submit"]');
    
    // Wait for the API response
    const response = await responsePromise;
    console.log(`Form submission response status: ${response.status()}`);
    
    // Check if the success message appears
    const successVisible = await page.waitForSelector('text="Vielen Dank für Ihre Nachricht!"', { 
      timeout: 5000,
      state: 'visible'
    }).catch(() => null);
    
    if (successVisible) {
      console.log('Success: Form submitted successfully and success message displayed');
    } else {
      console.log('Warning: Success message not displayed after form submission');
      
      // Check for error messages
      const errorMessage = await page.textContent('.text-red-500, .text-red-600').catch(() => null);
      if (errorMessage) {
        console.log('Error message displayed:', errorMessage);
      }
    }
    
    // Wait a moment to ensure all network activity is captured
    await page.waitForTimeout(2000);
    
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Take a screenshot of the final state
    await page.screenshot({ path: 'contact-form-test-result.png' });
    
    // Close browser
    await browser.close();
    console.log('Test completed.');
  }
})();