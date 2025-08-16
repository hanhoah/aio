// Simple script to test email sending functionality
// Usage: node test-email-sending.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Load environment variables
try {
  dotenv.config({ path: path.join(rootDir, '.env.local') });
  console.log('Loaded environment variables from .env.local');
} catch (error) {
  console.error('Error loading .env.local file:', error.message);
  process.exit(1);
}

// Verify environment variables
console.log('\nChecking environment variables:');
const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'CONTACT_EMAIL'];
let missingVars = false;

for (const varName of requiredVars) {
  if (!process.env[varName]) {
    console.error(`❌ Missing required environment variable: ${varName}`);
    missingVars = true;
  } else {
    if (varName.includes('PASSWORD') || varName.includes('USER')) {
      console.log(`✅ ${varName}: ******* (value is set)`);
    } else {
      console.log(`✅ ${varName}: ${process.env[varName]}`);
    }
  }
}

if (missingVars) {
  console.error('\nPlease set all required environment variables in .env.local file');
  process.exit(1);
}

// Create test email
async function sendTestEmail() {
  console.log('\nSetting up email transporter...');
  
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true
    },
    debug: true // Enable debug output
  });
  
  // Verify connection
  console.log('Verifying connection to mail server...');
  try {
    const verifyResult = await transporter.verify();
    console.log('✅ Server connection successful:', verifyResult);
  } catch (error) {
    console.error('❌ Server connection failed:', error.message);
    console.error('\nDetailed error:', error);
    
    // Provide troubleshooting advice based on error
    if (error.code === 'EAUTH') {
      console.log('\nAuthentication failed. Please check:');
      console.log('1. Your SMTP_USER and SMTP_PASSWORD are correct');
      console.log('2. If using Gmail, make sure you\'re using an App Password');
      console.log('   (Go to Google Account > Security > App Passwords)');
    } else if (error.code === 'ESOCKET') {
      console.log('\nConnection issue. Please check:');
      console.log('1. SMTP_HOST and SMTP_PORT are correct');
      console.log('2. Your network allows outbound connections to the mail server');
    }
    
    process.exit(1);
  }
  
  // Email content
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || 'info@aio-consulting.de',
    subject: 'Test Email from AIO Consulting Website',
    text: 'This is a test email to verify the email sending functionality is working correctly.\n\nTimestamp: ' + new Date().toISOString(),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <h2 style="color: #333;">Test Email from AIO Consulting Website</h2>
        <p>This is a test email to verify the email sending functionality is working correctly.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
      </div>
    `,
  };
  
  // Send email
  console.log('\nSending test email...');
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    console.log('\nIf you did not receive the email, please check:');
    console.log('1. Your spam folder');
    console.log('2. The recipient email address is correct');
    console.log('3. Email delivery logs in your mail service dashboard');
  } catch (error) {
    console.error('❌ Failed to send test email:', error.message);
    console.error('\nDetailed error:', error);
    process.exit(1);
  }
}

// Run the test
sendTestEmail().catch(console.error);