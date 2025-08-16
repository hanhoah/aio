# Contact Form Testing Tools

This directory contains tools to test the contact form functionality and diagnose email delivery issues on the AIO Consulting website.

## Setup

First, install the dependencies:

```bash
cd test
npm install
```

## Available Tests

### 1. Contact Form UI Test

Tests the complete contact form submission process using Playwright:

```bash
node test-contact-form.js
```

This test will:
- Navigate to the website
- Fill out the contact form
- Submit the form
- Check if the success message appears
- Monitor network requests and responses

### 2. Email Delivery Test

A more comprehensive test that checks both the contact form and email delivery configuration:

```bash
node email-delivery-test.js
```

This test includes:
- Contact form submission test
- SMTP configuration check
- Network connectivity test for the email server
- Common issues checklist

### 3. Direct Email Sending Test

Tests only the email sending functionality without going through the website:

```bash
node test-email-sending.js
```

This script will:
- Load the SMTP configuration from `.env.local`
- Verify connection to the mail server
- Send a test email
- Provide detailed error information if email sending fails

## Fixing Email Delivery Issues

If emails are not being delivered, here are some steps to diagnose and fix the issue:

### 1. Check Gmail Settings (if using Gmail)

Google has discontinued "Less secure app access." You need to:
1. Go to your Google Account Security settings
2. Enable 2-Step Verification if not already enabled
3. Generate an App Password
4. Use the App Password in your `.env.local` file

### 2. Try a Different Email Service

Consider switching to a dedicated email service like SendGrid, Mailgun, or AWS SES:

1. Sign up for an account
2. Get your API key or SMTP credentials
3. Update the `.env.local` file with the new credentials
4. Update the contact form API route if necessary

Example `.env.local` for SendGrid:
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
CONTACT_EMAIL=info@aio-consulting.de
DEBUG=false
```

### 3. Check Server Environment

Make sure your hosting environment allows outbound SMTP connections:
- Check firewall settings
- Ensure port 587 (or 465) is open for outbound connections
- Consider using a service with an HTTP API instead of SMTP

## Detailed Reports

For a comprehensive analysis of the contact form and email delivery functionality, see:

- [Email Delivery Report](./email-delivery-report.md) - Detailed analysis and recommendations