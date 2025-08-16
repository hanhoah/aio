// Load environment variables manually
const fs = require('fs');
const path = require('path');

// Parse .env.local file
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = envContent.split('\n').reduce((acc, line) => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    const key = match[1].trim();
    const value = match[2].trim();
    if (key && value) {
      acc[key] = value;
    }
  }
  return acc;
}, {});

// Add environment variables to process.env
Object.keys(envVars).forEach(key => {
  process.env[key] = envVars[key];
});
const nodemailer = require('nodemailer');

// Funktion zum Testen des Email-Versands
async function testEmailSending() {
  console.log('Starting email test with the following configuration:');
  console.log('SMTP Host:', process.env.SMTP_HOST);
  console.log('SMTP Port:', process.env.SMTP_PORT);
  console.log('SMTP User:', process.env.SMTP_USER ? process.env.SMTP_USER.substring(0, 3) + '***' : undefined);
  console.log('Contact Email:', process.env.CONTACT_EMAIL);

  // Prüfe, ob notwendige Umgebungsvariablen vorhanden sind
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error('❌ Fehlende SMTP-Konfiguration in .env.local');
    console.log('Bitte stellen Sie sicher, dass folgende Variablen gesetzt sind:');
    console.log('SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD');
    return;
  }

  // Erstelle Transporter mit Umgebungsvariablen
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true
    }
  });

  // Test-Email Konfiguration
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || 'info@aio-consulting.de',
    subject: 'Test Email - Kontaktformular',
    text: 'Dies ist eine Test-Email, um die Funktionalität des Kontaktformulars zu überprüfen.',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <h2 style="color: #333;">Test Email - Kontaktformular</h2>
        <p>Dies ist eine Test-Email, um die Funktionalität des Kontaktformulars zu überprüfen.</p>
        <p>Gesendet am: ${new Date().toLocaleString('de-DE')}</p>
      </div>
    `,
  };

  try {
    // Verifiziere SMTP-Verbindung
    console.log('Überprüfe SMTP-Verbindung...');
    await transporter.verify();
    console.log('✅ SMTP-Verbindung erfolgreich hergestellt');
    
    // Sende Test-Email
    console.log('Sende Test-Email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email erfolgreich gesendet!');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    
    return true;
  } catch (error) {
    console.error('❌ Fehler beim Email-Versand:');
    console.error(error);
    
    // Hilfreiche Tipps zur Fehlerbehebung
    console.log('\nHinweise zur Fehlerbehebung:');
    
    if (error.code === 'EAUTH') {
      console.log('- Authentifizierungsfehler: Überprüfen Sie Benutzername und Passwort');
      console.log('- Bei Gmail: Stellen Sie sicher, dass Sie ein App-Passwort verwenden (nicht Ihr normales Passwort)');
      console.log('- App-Passwörter können hier erstellt werden: https://myaccount.google.com/apppasswords');
    }
    
    if (error.code === 'ESOCKET' || error.code === 'ETIMEDOUT') {
      console.log('- Verbindungsfehler: Überprüfen Sie die Firewall-Einstellungen');
      console.log('- Stellen Sie sicher, dass der Server ausgehende Verbindungen zum SMTP-Host zulässt');
    }
    
    return false;
  }
}

// Führe den Test aus
testEmailSending()
  .then(() => {
    console.log('Test abgeschlossen');
  })
  .catch(error => {
    console.error('Unerwarteter Fehler beim Testen:', error);
  });