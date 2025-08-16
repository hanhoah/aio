# Todo: Kontaktformular verbessern

## Aktueller Status
- ✅ Impressum angepasst (Handelsregister, Registergericht, Umsatzsteuer-ID entfernt)
- ✅ E-Mail-Versand über SMTP mit App-Passwort funktioniert im Test
- ✅ Kontaktformular sendet E-Mails im Produktiveinsatz an hanniboy@gmail.com
- ❌ E-Mail-Weiterleitung von info@aio-consulting.de zu hanniboy@gmail.com funktioniert nicht

## Durchgeführte Maßnahmen

### 1. Kurzfristige Fehlerbehebung
- ✅ Spam-Ordner auf empfangene Test-E-Mails überprüft
- ✅ Detaillierteres Logging im Produktionssystem eingerichtet
  - ✅ DEBUG=true in .env.local und auf Vercel gesetzt
  - ✅ Serverprotokolle nach Fehlermeldungen durchsucht
- ✅ Gmail-Einstellungen überprüft
- ✅ Vercel-Umgebungsvariablen mit lokaler .env.local abgeglichen
- ✅ API-Route angepasst, um E-Mails direkt an hanniboy@gmail.com zu senden
- ✅ Support-Anfrage an United Domains bezüglich der E-Mail-Weiterleitung gestellt

### 2. Mittelfristige Verbesserungen (Noch offen)
- [ ] Speziellen E-Mail-Dienst für Webanwendungen einrichten
  - [ ] SendGrid Account erstellen (250 E-Mails/Tag kostenlos)
  - [ ] Alternative: Resend.io oder Mailgun evaluieren
- [ ] API-Route für Kontaktformular weiter verbessern
  - [ ] Fehlerbehandlung optimieren
- [ ] Fallback-Mechanismus implementieren
  - [ ] Bei Fehlern automatisch andere Versandmethode nutzen
  - [ ] Fehlgeschlagene Anfragen speichern/protokollieren

### 3. Langfristige Optimierungen (Noch offen)
- [ ] E-Mail-Vorlagen erstellen und in separaten Dateien auslagern
- [ ] Formular um CAPTCHA oder andere Anti-Spam-Maßnahmen erweitern
- [ ] E-Mail-Queue-System mit Wiederholungsversuchen einrichten
- [ ] Automatische Benachrichtigung bei wiederholten Versandfehlern
- [ ] Kontaktanfragen in Datenbank oder CRM-System speichern

## Aktuelle Lösungen
1. **Kontaktformular**: Sendet E-Mails direkt an hanniboy@gmail.com statt an info@aio-consulting.de
2. **E-Mail-Weiterleitung**: Problembehebung läuft - Support-Anfrage an United Domains gestellt

## Nächste Schritte
1. Antwort von United Domains abwarten bezüglich der E-Mail-Weiterleitungsprobleme
2. Bei Bedarf weitere Maßnahmen ergreifen, falls die E-Mail-Weiterleitung nicht repariert werden kann

## Ressourcen
- [SendGrid-Dokumentation](https://sendgrid.com/docs)
- [Nodemailer Troubleshooting](https://nodemailer.com/usage/#troubleshooting)
- [Next.js API Routes Best Practices](https://nextjs.org/docs/api-routes/introduction)
- [Gmail App-Passwörter](https://myaccount.google.com/apppasswords)
