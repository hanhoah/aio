import { test, expect } from '@playwright/test';

test('Contact form submission test', async ({ page }) => {
  // Log network requests related to the contact form
  page.on('request', request => {
    if (request.url().includes('/api/contact')) {
      console.log(`>> Request: ${request.method()} ${request.url()}`);
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
  
  page.on('response', async response => {
    if (response.url().includes('/api/contact')) {
      console.log(`<< Response: ${response.status()} ${response.statusText()}`);
      try {
        const body = await response.json();
        console.log('<< Response body:', body);
      } catch (e) {
        console.log('<< Response body: Could not parse as JSON');
      }
    }
  });
  
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
  
  // Analyze the response
  const responseBody = await response.json();
  
  // Check if we got a success or error response
  if (response.ok()) {
    console.log('API returned success response:', responseBody);
    
    // Check if the success message appears in the UI
    await expect(page.locator('text="Vielen Dank für Ihre Nachricht!"')).toBeVisible({
      timeout: 5000
    });
    
    console.log('Success: Form submitted successfully and success message displayed');
  } else {
    console.log('API returned error response:', responseBody);
    
    // Check for error messages in the UI
    const errorElement = await page.locator('.text-red-500, .text-red-600').first();
    if (await errorElement.isVisible()) {
      const errorMessage = await errorElement.textContent();
      console.log('Error message displayed:', errorMessage);
    }
    
    // This will fail the test if we got an error response
    expect(response.ok()).toBeTruthy();
  }
  
  // Take a screenshot of the final state
  await page.screenshot({ path: 'contact-form-test-result.png' });
});