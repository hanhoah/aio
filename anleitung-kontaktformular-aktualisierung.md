# Anleitung zur Aktualisierung des Kontaktformulars in der Produktion

## Vorgenommene Änderungen

1. **API-Route angepasst**:
   - Die E-Mail-Adresse für den Empfang von Kontaktformularen wurde von `info@aio-consulting.de` zu `hanniboy@gmail.com` geändert.
   - Dadurch wird die Weiterleitung umgangen und die E-Mails werden direkt an das Gmail-Postfach gesendet.

2. **DEBUG-Modus aktiviert**:
   - In der lokalen Umgebung wurde der DEBUG-Modus aktiviert, um detailliertere Informationen über den E-Mail-Versand zu erhalten.

3. **Lokale Tests erfolgreich**:
   - Wir haben verifiziert, dass der E-Mail-Versand in der lokalen Umgebung mit der direkten Gmail-Adresse funktioniert.

## Aktualisierung der Produktionsumgebung

Um die Änderungen in der Produktionsumgebung zu implementieren, sind folgende Schritte erforderlich:

### 1. Umgebungsvariablen in Vercel aktualisieren

1. Loggen Sie sich in Ihrem Vercel-Dashboard ein
2. Navigieren Sie zum Projekt `aio-consulting.de`
3. Gehen Sie zu "Settings" > "Environment Variables"
4. Aktualisieren Sie die folgenden Umgebungsvariablen:
   - `CONTACT_EMAIL`: Ändern Sie den Wert auf `hanniboy@gmail.com`
   - `DEBUG`: Setzen Sie vorübergehend auf `true` (kann später wieder auf `false` gesetzt werden)

### 2. Code-Änderungen hochladen

```bash
# Änderungen commiten
git add app/api/contact/route.ts
git commit -m "Kontaktformular: E-Mail-Adresse auf direkte Gmail-Adresse geändert"

# Änderungen pushen
git push origin main
```

### 3. Deployment überprüfen

1. Vercel wird automatisch ein neues Deployment starten
2. Prüfen Sie den Status des Deployments im Vercel-Dashboard
3. Stellen Sie sicher, dass keine Build-Fehler auftreten

### 4. Kontaktformular testen

1. Öffnen Sie die Website in der Produktion: [https://www.aio-consulting.de/](https://www.aio-consulting.de/)
2. Navigieren Sie zum Kontaktformular
3. Senden Sie eine Test-Nachricht mit Ihren Kontaktdaten
4. Überprüfen Sie, ob die E-Mail direkt in Ihrem Gmail-Postfach ankommt

### 5. Fehlersuche bei Problemen

Wenn das Kontaktformular immer noch nicht funktioniert:

1. Überprüfen Sie die Vercel-Logs:
   - Gehen Sie zum Vercel-Dashboard > Projekt > Deployments > Letztes Deployment > "Function Logs"
   - Suchen Sie nach Einträgen mit "E-Mail-Konfiguration" oder "Fehler beim Senden"

2. Überprüfen Sie die Gmail-Einstellungen:
   - Stellen Sie sicher, dass das App-Passwort noch gültig ist
   - Überprüfen Sie, ob die Gmail-Adresse Beschränkungen bezüglich des Empfangs von E-Mails hat

3. Prüfen Sie den Spam-Ordner:
   - Die E-Mails könnten im Spam-Ordner landen

### 6. Nach erfolgreicher Fehlerbehebung

Sobald das Kontaktformular in der Produktion zuverlässig funktioniert:

1. Deaktivieren Sie den DEBUG-Modus:
   - Setzen Sie die Umgebungsvariable `DEBUG` auf `false` zurück
   - Dies reduziert die Menge an sensiblen Informationen in den Logs

## Notizen

- Das App-Passwort für Gmail funktioniert auch mit Leerzeichen. Es ist nicht notwendig, die Leerzeichen zu entfernen.
- Bei anhaltenden Problemen könnte ein Wechsel zu einem spezialisierten E-Mail-Dienst wie SendGrid oder Mailgun sinnvoll sein.
