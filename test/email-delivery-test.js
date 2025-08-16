import { chromium } from 'playwright';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';

const execAsync = promisify(exec);

// Email delivery check function
async function checkEmailDelivery() {
  console.log('\n--- CHECKING EMAIL DELIVERY CONFIGURATION ---');
  
  try {
    // Read the environment variables
    console.log('Checking environment variables...');
    
    // Try to read .env.local
    try {
      const envFile = await fs.readFile('/home/han/projects/aio-consulting.de/.env.local', 'utf-8');
      console.log('Found .env.local file:');
      
      // Safely print environment variables without showing actual values
      const envLines = envFile.split('\n');
      for (const line of envLines) {
        if (line.trim() && !line.startsWith('#')) {
          const [key, value] = line.split('=');
          if (key) {
            if (key.includes('PASSWORD') || key.includes('USER')) {
              console.log(`${key}=******* (value is set)`);
            } else {
              console.log(`${key}=${value || '(empty)'}`);
            }
          }
        }
      }
    } catch (err) {
      console.log('No .env.local file found. This is required for email functionality.');
      console.log('Please create a .env.local file with proper SMTP configuration based on .env.local.example');
    }
    
    // Check SMTP configuration
    console.log('\nChecking SMTP server connectivity...');
    try {
      // Test DNS resolution for the SMTP host
      const { stdout: nslookupResult } = await execAsync('nslookup smtp.gmail.com');
      console.log('SMTP host DNS resolution successful:');
      console.log(nslookupResult);
    } catch (error) {
      console.log('Failed to resolve SMTP host DNS:');
      console.log(error.message);
    }
    
    // Check network connectivity to SMTP server
    try {
      const { stdout: telnetResult } = await execAsync('nc -zv smtp.gmail.com 587 2>&1');
      console.log('SMTP server connectivity test successful:');
      console.log(telnetResult);
    } catch (error) {
      console.log('Failed to connect to SMTP server:');
      console.log(error.message);
    }
    
    // Common issues checklist
    console.log('\n--- COMMON EMAIL DELIVERY ISSUES CHECKLIST ---');
    console.log('1. SMTP_USER and SMTP_PASSWORD: Make sure they are correctly set in .env.local');
    console.log('2. If using Gmail: Make sure "Less secure app access" is enabled or an App Password is used');
    console.log('3. Firewall settings: Ensure outbound connections to SMTP server are allowed');
    console.log('4. Check CONTACT_EMAIL value: Ensure it is a valid recipient address');
    console.log('5. Check server logs for detailed error messages related to email sending');
    console.log('6. Email spam filters: The emails might be delivered but marked as spam');
    console.log('7. Check your mail server\'s sending limits and quotas');
    
  } catch (error) {
    console.error('Error during email delivery check:', error);
  }
}

// Main test function
(async () => {
  console.log('Starting contact form and email delivery test...');
  
  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Enable request/response logging
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
    
    // Analyze the response
    try {
      const responseBody = await response.json();
      console.log('Response body:', responseBody);
      
      // Check if we got a success or error response
      if (response.ok()) {
        // Check if the success message appears in the UI
        const successMessage = await page.waitForSelector('text="Vielen Dank für Ihre Nachricht!"', { 
          timeout: 5000,
          state: 'visible'
        }).catch(() => null);
        
        if (successMessage) {
          console.log('Success: Form submitted successfully and success message displayed');
        } else {
          console.log('Warning: Success message not displayed after successful API response');
        }
      } else {
        // Check for error messages in the UI
        const errorElement = await page.$('.text-red-500, .text-red-600');
        if (errorElement) {
          const errorMessage = await errorElement.textContent();
          console.log('Error message displayed:', errorMessage);
        }
        
        console.error('Error: Form submission failed with status', response.status());
      }
    } catch (parseError) {
      console.error('Error parsing response:', parseError);
    }
    
    // Check email delivery configuration
    await checkEmailDelivery();
    
    // Wait to observe the final state
    await page.waitForTimeout(2000);
    
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Take a screenshot of the final state
    await page.screenshot({ path: 'contact-form-test-result.png' });
    console.log('Screenshot saved as contact-form-test-result.png');
    
    // Close browser
    await browser.close();
    console.log('Test completed.');
  }
})();