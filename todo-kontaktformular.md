# Todo: Kontaktformular verbessern

## Aktueller Status
- ✅ Impressum angepasst (Handelsregister, Registergericht, Umsatzsteuer-ID entfernt)
- ✅ E-Mail-Versand über SMTP mit App-Passwort funktioniert im Test
- ❌ Kontaktformular sendet keine E-Mails im Produktiveinsatz

## Zu erledigende Aufgaben

### 1. Kurzfristige Fehlerbehebung
- [ ] Spam-Ordner auf empfangene Test-E-Mails überprüfen
- [ ] Detaillierteres Logging im Produktionssystem einrichten
  - [ ] DEBUG=true in .env auf dem Server setzen (temporär)
  - [ ] Serverprotokolle nach Fehlermeldungen durchsuchen
- [ ] Gmail-Einstellungen überprüfen (weniger sichere Apps zulassen)
- [ ] Vercel-Umgebungsvariablen mit lokaler .env.local vergleichen

### 2. Mittelfristige Verbesserungen
- [ ] Speziellen E-Mail-Dienst für Webanwendungen einrichten
  - [ ] SendGrid Account erstellen (250 E-Mails/Tag kostenlos)
  - [ ] Alternative: Resend.io oder Mailgun evaluieren
- [ ] API-Route für Kontaktformular anpassen
  - [ ] Transporter-Konfiguration aktualisieren
  - [ ] Fehlerbehandlung verbessern
- [ ] Fallback-Mechanismus implementieren
  - [ ] Bei Fehlern automatisch andere Versandmethode nutzen
  - [ ] Fehlgeschlagene Anfragen speichern/protokollieren

### 3. Langfristige Optimierungen
- [ ] E-Mail-Vorlagen erstellen und in separaten Dateien auslagern
- [ ] Formular um CAPTCHA oder andere Anti-Spam-Maßnahmen erweitern
- [ ] E-Mail-Queue-System mit Wiederholungsversuchen einrichten
- [ ] Automatische Benachrichtigung bei wiederholten Versandfehlern
- [ ] Kontaktanfragen in Datenbank oder CRM-System speichern

## Ressourcen
- [SendGrid-Dokumentation](https://sendgrid.com/docs)
- [Nodemailer Troubleshooting](https://nodemailer.com/usage/#troubleshooting)
- [Next.js API Routes Best Practices](https://nextjs.org/docs/api-routes/introduction)
- [Gmail App-Passwörter](https://myaccount.google.com/apppasswords)