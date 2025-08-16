import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Überprüfung der Pflichtfelder
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus' },
        { status: 400 }
      );
    }

    // E-Mail-Versand über Gmail einrichten
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER, // Ihre Gmail-Adresse
        pass: process.env.SMTP_PASSWORD, // App-Passwort für Gmail
      },
      tls: {
        rejectUnauthorized: true // Bei Gmail sollte dies auf true gesetzt sein
      }
    });

    // E-Mail-Inhalt
    const mailOptions = {
      from: process.env.SMTP_USER, // Absender ist Ihre Gmail-Adresse
      to: process.env.CONTACT_EMAIL || 'hanniboy@gmail.com', // Direkt an Gmail senden
      replyTo: email, // Antworten gehen direkt an den Absender der Anfrage
      subject: `[AIO Consulting Website] Neue Anfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}\n\n--\nDiese E-Mail wurde über das Kontaktformular auf aio-consulting.de gesendet.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #333; margin-bottom: 5px;">Neue Anfrage über das Kontaktformular</h2>
            <p style="color: #666; font-size: 14px;">Eingegangen am ${new Date().toLocaleString('de-DE', { dateStyle: 'full', timeStyle: 'short' })}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>E-Mail:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; font-size: 16px; margin-bottom: 10px;">Nachricht:</h3>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-line;">${message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div style="font-size: 12px; color: #999; text-align: center; padding-top: 20px; border-top: 1px solid #eaeaea;">
            <p>Diese E-Mail wurde über das Kontaktformular auf <a href="https://aio-consulting.de" style="color: #0066cc; text-decoration: none;">aio-consulting.de</a> gesendet.</p>
          </div>
        </div>
      `,
    };

    // E-Mail senden
    try {
      // Überprüfen der SMTP-Konfiguration
      if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
        console.error('SMTP-Konfiguration fehlt: Bitte überprüfen Sie die .env.local Datei');
        throw new Error('SMTP-Konfiguration unvollständig');
      }
      
      // Verifikation der E-Mail-Konfiguration (nur bei DEBUG=true)
      if (process.env.DEBUG === 'true') {
        console.log('E-Mail-Konfiguration:', {
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          user: process.env.SMTP_USER?.substring(0, 3) + '***',
          to: process.env.CONTACT_EMAIL || 'hanniboy@gmail.com'
        });
      }
      
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ E-Mail erfolgreich gesendet:', {
        messageId: info.messageId,
        response: info.response,
        timestamp: new Date().toISOString(),
        recipient: process.env.CONTACT_EMAIL || 'hanniboy@gmail.com'
      });
      
      return NextResponse.json(
        { message: 'Vielen Dank für Ihre Nachricht! Wir werden uns umgehend bei Ihnen melden.' },
        { status: 200 }
      );
    } catch (emailError) {
      // Detailliertes Error-Logging
      console.error('❌ Fehler beim Senden der E-Mail:', {
        error: emailError instanceof Error ? emailError.message : String(emailError),
        stack: emailError instanceof Error ? emailError.stack : undefined,
        timestamp: new Date().toISOString(),
        sender: process.env.SMTP_USER?.substring(0, 3) + '***',
        recipient: process.env.CONTACT_EMAIL || 'hanniboy@gmail.com'
      });
      
      // Kontaktdaten für Debugging loggen
      console.log('📝 Kontaktformular-Anfrage konnte nicht gesendet werden:', {
        name,
        email,
        messagePreview: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json(
        { error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter info@aio-consulting.de.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Fehler bei der Verarbeitung der Anfrage:', error);
    return NextResponse.json(
      { error: 'Beim Verarbeiten Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
