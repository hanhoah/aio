# AIO Consulting Workflow & Best Practices

Diese Dokumentation enthält Best Practices und Workflow-Richtlinien für die Entwicklung der AIO Consulting-Website. Befolge diese Richtlinien, um einen konsistenten, wartbaren und leistungsstarken Code zu gewährleisten.

## Technologie-Stack

- **Next.js**: App Router, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Code-Struktur und Organisation

### Verzeichnisstruktur

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

### Komponentenhierarchie

- Halte Komponenten klein und fokussiert auf eine Aufgabe
- Nutze Composition Pattern für komplexe Komponenten
- Verwende das React Context API für globale Zustände, wenn nötig

## Styling-Richtlinien

### Tailwind CSS

- **DO** Verwende Tailwind-Klassen für Styling
- **DO NOT** Verwende Inline-Styles
- **DO** Nutze `cn()` aus `@/lib/utils` für bedingte Klassen
- **DO** Verwende die Tailwind-Konfiguration für Farben und andere Design-Tokens

```tsx
// Richtig
<div className="bg-primary text-white p-4 rounded-lg">...</div>

// Falsch
<div style={{ backgroundColor: 'blue', color: 'white', padding: '1rem' }}>...</div>
```

### Komponenten

- **DO** Verwende shadcn/ui-Komponenten als Basis
- **DO** Erstelle neue Komponenten basierend auf shadcn/ui-Konventionen
- **DO** Verwende TypeScript-Interfaces für Komponenten-Props
- **DO NOT** Überschreibe shadcn/ui-Komponenten mit globalen CSS-Regeln

```tsx
// Richtig - Props definieren
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
}

// Richtig - shadcn/ui-Komponenten erweitern
<Button variant="outline" className="my-custom-class">
  Klick mich
</Button>
```

## Responsive Design

- **DO** Verwende mobile-first Ansatz
- **DO** Nutze Tailwind-Breakpoints für responsives Design
- **DO** Teste regelmäßig auf verschiedenen Geräten/Viewports

```tsx
// Richtig - Mobile-first Ansatz
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">...</div>
```

## Performance-Optimierung

- **DO** Verwende Next.js Image-Komponente für Bilder
- **DO** Nutze Code-Splitting und dynamischen Import, wo sinnvoll
- **DO** Optimiere Fonts und Icons
- **DO** Implementiere Lazy Loading für Inhalte unterhalb des Viewports
- **DO NOT** Lade unnötige JavaScript-Bibliotheken

```tsx
// Richtig - Optimiertes Bild
import Image from 'next/image';

<Image 
  src="/images/hero.jpg" 
  alt="Hero" 
  width={1200} 
  height={600} 
  className="rounded-lg"
  priority 
/>
```

## Barrierefreiheit (Accessibility)

- **DO** Verwende semantisches HTML
- **DO** Stelle sicher, dass alle interaktiven Elemente per Tastatur bedienbar sind
- **DO** Füge Alt-Text für Bilder hinzu
- **DO** Verwende ARIA-Attribute, wenn nötig
- **DO** Stelle ausreichenden Farbkontrast sicher

```tsx
// Richtig - Semantisches HTML und Barrierefreiheit
<button 
  className="bg-primary text-white p-4 rounded"
  aria-label="Menü öffnen"
  onClick={handleClick}
>
  <span className="sr-only">Menü</span>
  <MenuIcon />
</button>
```

## TypeScript

- **DO** Definiere Typen für alle Komponenten-Props
- **DO** Vermeide `any` wo möglich
- **DO** Nutze TypeScript-Features wie Union Types, Generics, etc.
- **DO** Exportiere Typen, die von mehreren Komponenten verwendet werden

```tsx
// Richtig - TypeScript-Typen
type ButtonVariant = 'default' | 'outline' | 'ghost';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}
```

## Git-Workflow

- **DO** Nutze aussagekräftige Commit-Messages
- **DO** Arbeite mit Feature-Branches
- **DO** Führe regelmäßig Rebases durch, um auf dem neuesten Stand zu bleiben
- **DO** Führe Code-Reviews durch, bevor Code in den Hauptbranch gemergt wird

```
# Beispiel für gute Commit-Message
feat: Kontaktformular-Validierung hinzugefügt

- E-Mail-Validierung implementiert
- Fehleranzeige für Formularfelder
- Erfolgs-Feedback nach dem Absenden
```

## Testing

- **DO** Schreibe Unit-Tests für kritische Komponenten
- **DO** Nutze Jest und React Testing Library
- **DO** Automatisiere Tests in der CI-Pipeline

## Vercel-Deployment

- **DO** Verbinde dein GitHub-Repository mit Vercel
- **DO** Nutze Preview-Deployments für Feature-Branches
- **DO** Konfiguriere Umgebungsvariablen in der Vercel-Konsole
- **DO** Überwache Analytics und Performance-Daten nach dem Deployment

## Weitere Best Practices

- **DO** Halte Abhängigkeiten aktuell
- **DO** Dokumentiere komplexen Code
- **DO** Optimiere für Core Web Vitals
- **DO** Beachte SEO-Best-Practices (Meta-Tags, strukturierte Daten, etc.)
- **DO NOT** Committe sensible Daten ins Repository (API-Keys, Zugangsdaten)

Diese Richtlinien helfen dir, einen konsistenten, wartbaren und leistungsstarken Code zu schreiben. Bei Fragen oder Vorschlägen zur Verbesserung dieser Richtlinien, sprich das Team an.