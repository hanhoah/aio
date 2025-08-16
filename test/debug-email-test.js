// Debug version to test email sending functionality
// Usage: node test/debug-email-test.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

// Output env file content directly
console.log('Reading .env.local file directly:');
const envFilePath = path.join(rootDir, '.env.local');
try {
  const envContent = fs.readFileSync(envFilePath, 'utf8');
  console.log('Raw .env.local content:');
  console.log(envContent);
} catch (error) {
  console.error('Error reading .env.local:', error.message);
}

// Force clear the process.env cache first
delete process.env.CONTACT_EMAIL;

// Load environment variables with override
try {
  const result = dotenv.config({ path: envFilePath, override: true });
  console.log('\nLoaded environment variables result:', result);
} catch (error) {
  console.error('Error loading .env.local file:', error.message);
  process.exit(1);
}

// Verify environment variables
console.log('\nChecking environment variables:');
const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'CONTACT_EMAIL'];

for (const varName of requiredVars) {
  if (!process.env[varName]) {
    console.error(`❌ Missing required environment variable: ${varName}`);
  } else {
    if (varName.includes('PASSWORD')) {
      console.log(`✅ ${varName}: ******* (value is set)`);
    } else {
      console.log(`✅ ${varName}: ${process.env[varName]}`);
    }
  }
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
  
  // Email content - Force use hanniboy@gmail.com directly
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'hanniboy@gmail.com', // Force to direct Gmail address
    subject: 'Debug Test Email from AIO Consulting Website',
    text: 'This is a debug test email sent directly to hanniboy@gmail.com.\n\nTimestamp: ' + new Date().toISOString(),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <h2 style="color: #333;">Debug Test Email from AIO Consulting Website</h2>
        <p>This is a debug test email sent directly to hanniboy@gmail.com.</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
      </div>
    `,
  };
  
  // Send email
  console.log('\nSending test email to hardcoded address: hanniboy@gmail.com');
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  } catch (error) {
    console.error('❌ Failed to send test email:', error.message);
    console.error('\nDetailed error:', error);
    process.exit(1);
  }
}

// Run the test
sendTestEmail().catch(console.error);
