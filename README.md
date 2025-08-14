# AIO Consulting Website

Moderne Unternehmenswebsite für die AIO Consulting, gebaut mit Next.js, TypeScript, Tailwind CSS und shadcn/ui.

## Tech-Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** für Styling
- **shadcn/ui** für Komponenten
- **pnpm** als Package Manager
- **Vercel** für Deployment

## Installation und Setup

### Voraussetzungen

- Node.js 18.x oder höher
- pnpm 8.x oder höher

### Projekt einrichten

1. Repository klonen:

```bash
git clone https://github.com/dein-username/aio-consulting.de.git
cd aio-consulting.de
```

2. Abhängigkeiten installieren:

```bash
pnpm install
```

3. Entwicklungsserver starten:

```bash
pnpm dev
```

Die Anwendung ist nun unter [http://localhost:3000](http://localhost:3000) verfügbar.

### shadcn/ui-Komponenten hinzufügen

Das Projekt verwendet bereits einige shadcn/ui-Komponenten. Um weitere hinzuzufügen:

```bash
pnpm dlx shadcn-ui@latest add [component-name]
```

Beispiel:

```bash
pnpm dlx shadcn-ui@latest add accordion
pnpm dlx shadcn-ui@latest add card
```

## Projekt-Struktur

```
/app                  # Next.js App Router Struktur
  /page.tsx           # Startseite
  /impressum/         # Impressum-Seite
  /datenschutz/       # Datenschutz-Seite
  /globals.css        # Globale CSS-Definitionen
  /layout.tsx         # Root-Layout mit Header und Footer
/components           # Wiederverwendbare Komponenten
  /ui/                # UI-Basiskomponenten (shadcn/ui)
  /layout/            # Layout-Komponenten (Header, Footer)
  /sections/          # Sektionskomponenten für die Startseite
/lib                  # Hilfsfunktionen und Utilities
/public               # Statische Dateien (Bilder, Fonts, etc.)
```

## Deployment auf Vercel

### Einrichtung

1. Erstelle ein [Vercel-Konto](https://vercel.com/signup) falls noch nicht vorhanden
2. Erstelle ein neues Projekt und verbinde es mit deinem GitHub-Repository
3. Verwende folgende Einstellungen:
   - Framework Preset: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

### Automatisches Deployment

Das Projekt ist für automatisches Deployment auf Vercel konfiguriert:

- Pushes zum `main`-Branch werden automatisch in die Produktionsumgebung deployed
- Pull Requests erhalten automatisch Preview-Deployments

### Umgebungsvariablen

Kopiere die Variablen aus `.env.local.example` und füge sie in den Vercel-Projekteinstellungen unter "Environment Variables" hinzu.

### E-Mail-Konfiguration für Kontaktformular

Das Kontaktformular sendet E-Mails über Gmail SMTP. Folge diesen Schritten, um die E-Mail-Funktionalität einzurichten:

1. **Gmail App-Passwort einrichten**:
   - Aktiviere die Zwei-Faktor-Authentifizierung für dein Google-Konto unter [https://myaccount.google.com/security](https://myaccount.google.com/security)
   - Erstelle ein App-Passwort unter [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Wähle "Andere (benutzerdefiniert)" und gib "AIO Consulting Website" als Namen ein
   - Kopiere das generierte 16-stellige Passwort

2. **Umgebungsvariablen einrichten**:
   - Fülle die `.env.local` Datei mit deinen Gmail-Daten aus:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=deine-gmail-adresse@gmail.com
     SMTP_PASSWORD=dein-16-stelliges-app-passwort
     CONTACT_EMAIL=info@aio-consulting.de
     ```
   - Für Produktionsumgebung: Füge diese Variablen zu den Vercel-Umgebungsvariablen hinzu

3. **E-Mail-Weiterleitung einrichten**:
   - Logge dich bei deinem Domain-Provider (United Domains) ein
   - Richte eine E-Mail-Weiterleitung für info@aio-consulting.de zu deiner Gmail-Adresse ein

4. **Testen**:
   - Starte den Entwicklungsserver mit `pnpm dev`
   - Fülle das Kontaktformular aus und sende es ab
   - Überprüfe, ob die E-Mail an deine Gmail-Adresse weitergeleitet wurde

**Fehlerbehebung**:
- Überprüfe die Server-Logs im Terminal oder in den Vercel-Logs auf Fehlermeldungen
- Stelle sicher, dass das App-Passwort korrekt ist
- Prüfe, ob die E-Mail-Weiterleitung bei United Domains korrekt eingerichtet ist

## GitHub-Repository einrichten

1. Erstelle ein neues Repository auf GitHub
2. Initialisiere das lokale Git-Repository und pushe den Code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/dein-username/aio-consulting.de.git
git push -u origin main
```

## Best Practices

Eine ausführliche Dokumentation der Best Practices findest du in der [workflow.md](./workflow.md) Datei.

## Lizenz

Alle Rechte vorbehalten. Diese Codebasis ist proprietär und vertraulich.