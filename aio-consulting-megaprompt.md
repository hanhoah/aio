# MEGAPROMPT: aio-consulting.de — Vollständiges Drehbuch

> **Für die ausführende Instanz:** Dieses Dokument ist ein vollständiges Drehbuch für den Aufbau von `aio-consulting.de` zur führenden Solo-KI-Beratungs-Website im deutschsprachigen Raum. Lies ALLE Kapitel vollständig durch, bevor du irgendetwas umsetzt. Nutze die empfohlenen Skills und Models pro Phase.

---

## 0. KONTEXT — Wer bin ich, was ist aio?

**Person:** Han Hoa Huynh, Solo-Unternehmer, Digital Nomad in Vietnam (HCMC). Entwickelt seit 2022 aktiv mit KI-Tools. Hat echte Projekte umgesetzt: RAG-Bot für 17.000+ Mitglieder, Telegram-Bots, AI Media Assistants, Next.js SaaS-Produkte.

**Stack:** Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Vercel, PostgreSQL, pgvector, Claude API, n8n, Google Cloud.

**Projektpfad:** `/data/projects/aio-consulting.de`

**"aio"** = **AI Optimization** — keine Agentur, kein Team, ein Experte.

**Ziel:** Website ist das Herzstück meiner Kundenakquise. LinkedIn zeigt aio-consulting.de als URL. Deutsche KMU sollen sofort verstehen: Dieser Mann baut mir KI-Lösungen, die funktionieren.

**Wichtig für die ausführende Instanz:**
- Immer `/leistungen/` Unterseiten mitdenken
- Alle Texte in Deutsch (du/Sie-Anrede: **Sie** für Kunden)
- Preise NICHT öffentlich zeigen — nur "Preis auf Anfrage" oder Richtgrößen
- Keine generischen KI-Stock-Bilder verwenden, Han liefert eigene Fotos nach

---

## 1. STRATEGISCHE ANALYSE — Welche Services 2026 am meisten gefragt sind

> **Modell für diese Phase:** Opus (tiefste Marktanalyse) oder als Recherche-Vorbereitung nutzen

### Die 5 heißesten KI-Dienstleistungen für KMU Deutschland 2025/2026:

| Rang | Dienstleistung | Warum heiß | Han kann das? |
|------|---------------|------------|----------------|
| 1 | **KI-Prozessautomatisierung** | Jedes KMU hat manuelle Prozesse (Rechnungen, E-Mails, Berichte) — n8n + Claude API ersetzt diese | ✅ n8n + Claude API |
| 2 | **Custom AI Agents / RAG-Chatbots** | Unternehmen wollen ihre eigenen Daten mit KI nutzbar machen — Wissensdatenbanken, Kundenservice-Bots | ✅ pgvector, RAG-Erfahrung |
| 3 | **GEO / KI-SEO** | Google AI Overviews, ChatGPT, Perplexity — Firmen verstehen nicht, warum sie dort nicht auftauchen | ✅ Expertise vorhanden |
| 4 | **KI-gestützte Webentwicklung** | Websites mit KI-Features (Chatbot, Personalisierung, Automatisierung) | ✅ Next.js + API-Integration |
| 5 | **KI-Beratung & Roadmap** | CEOs wollen wissen: "Wo fange ich an?" — Einstiegsprodukt, low-ticket | ✅ Erfahrung aus Projekten |

### Was RAUS sollte aus dem aktuellen Portfolio:
- **"Prompt Engineering"** als Standalone-Service → zu commoditized, kaum Zahlungsbereitschaft mehr
- **"KI-Content-Marketing"** → umbenennen in "KI-Automatisiertes Content-System" mit klarem ROI

### Das neue optimale Service-Portfolio (6 Leistungen):

```
1. KI-Prozessautomatisierung     ← NEU / HAUPTSELLER
2. Custom AI Agents & Chatbots   ← NEU / HAUPTSELLER (bisher: LLM-Optimierung)
3. KI-gestützte Webentwicklung   ← BEHALTEN (umbenennen: "KI-Web-Apps")
4. GEO & KI-SEO                  ← BEHALTEN (umbenennen, zusammenführen)
5. KI-Content-Automatisierung    ← UMBENENNEN (bisher: KI-Content-Marketing)
6. KI-Beratung & Strategie       ← NEU / Einstiegsprodukt
```

### Pricing-Empfehlung (intern — für Anfragen):
- KI-Beratung / Strategie-Session: 300€ (2h, Festpreis)
- KI-Prozessautomatisierung: 2.500–6.000€ Einmalig
- Custom AI Agent / RAG-Chatbot: 3.000–8.000€
- KI-Web-App: 3.500–9.000€
- GEO & KI-SEO: 800€/Monat (Retainer)
- KI-Content-Automatisierung: 500€/Monat

> Han: Dein bisheriger Stundensatz (40€/h) ist für KI-Consulting zu niedrig. Diese Festpreise sind marktgerecht und erlauben dir mit KI-Hilfe 3x mehr zu liefern als ein klassischer Entwickler.

---

## 2. VORBEREITUNG — Dateien lesen bevor du anfängst

> **Modell:** Haiku (nur lesen, keine Änderungen)

```bash
# Pflichtlektüre bevor irgendwas geändert wird:
cat /data/projects/aio-consulting.de/data/services.ts
cat /data/projects/aio-consulting.de/components/sections/hero.tsx
cat /data/projects/aio-consulting.de/components/sections/about.tsx
cat /data/projects/aio-consulting.de/components/sections/services.tsx
cat /data/projects/aio-consulting.de/app/layout.tsx
cat /data/projects/aio-consulting.de/app/page.tsx
ls /data/projects/aio-consulting.de/app/leistungen/
```

Notiere dir:
- Welche Services bereits vorhanden sind (IDs, Unterseiten)
- Wo "Wir/Team" Formulierungen noch stecken
- Ob das Hero bereits ich-zentriert ist
- Ob die 5 Service-Seiten `/leistungen/[slug]` bereits existieren

---

## 3. PHASE 1 — Service-Portfolio aktualisieren

> **Modell:** Sonnet  
> **Priorität:** HOCH — Grundlage für alles andere  
> **Skill:** Kein spezieller Skill notwendig

### Aufgaben:

**3.1 `data/services.ts` komplett neu schreiben**

Ersetze die 5 bestehenden Services durch das neue 6er-Portfolio (siehe Kapitel 1). Struktur bleibt gleich (`ServiceData` interface). Neue IDs:

```typescript
// Neue Service-IDs:
"ki-prozessautomatisierung"   // NEU
"custom-ai-agents"             // NEU (ersetzt llm-optimierung)
"ki-web-apps"                  // UMBENENNEN (war: ki-webentwicklung)
"geo-ki-seo"                   // ZUSAMMENFÜHREN (war: ki-seo)
"ki-content-automatisierung"   // UMBENENNEN (war: ki-content-marketing)
"ki-beratung"                  // NEU
```

Für jeden Service:
- `title`: Klar, nutzenorientiert, deutsch
- `description`: 1-2 Sätze, fokussiert auf ROI/Ergebnis, nicht auf Technologie
- `benefits[]`: 4 messbare Vorteile (Zahlen wenn möglich)
- `isHighlighted: true` → für "ki-prozessautomatisierung" und "custom-ai-agents"

**3.2 Unterseiten anlegen**

Für jeden neuen Service eine Unterseite anlegen unter `/leistungen/[slug]/`. Prüfe welche bereits existieren. Template von bestehender Seite kopieren und anpassen.

**3.3 Qualitätssicherung**

```bash
cd /data/projects/aio-consulting.de && pnpm type-check && pnpm build
```

---

## 4. PHASE 2 — Texte & Copy optimieren (Hero, About, Process)

> **Modell:** Sonnet  
> **Priorität:** HOCH  
> **Skill:** Kein spezieller Skill — aber Marketing-Prinzipien anwenden (siehe unten)

### Marketing-Framework das IMMER gilt:

**AIDA für jede Section:**
- **A**ttention: Stärkste Aussage zuerst (kein Begrüßungstext!)
- **I**nterest: Warum Han, warum jetzt, was unterscheidet ihn
- **D**esire: Konkretes Ergebnis visualisieren (kein "wir helfen Ihnen")
- **A**ction: Eine klare CTA pro Section

**Sprache-Regeln:**
- Kein "Wir" — nur "Ich"
- Kein "helfen" — nur "umsetzen", "bauen", "automatisieren"
- Kein "innovative Lösungen" — konkrete Technologien nennen
- Keine Passivkonstruktionen
- Zahlen > Adjektive ("50% weniger Zeit" statt "deutliche Zeitersparnis")

### 4.1 Hero Section (`components/sections/hero.tsx`)

**Neue Headline:** 
```
KI-Lösungen, die Ihre Prozesse wirklich automatisieren.
```

**Subheadline:**
```
Ich baue Custom AI Agents, Chatbots und Automatisierungen 
für mittelständische Unternehmen — mit messbarem ROI in 4–8 Wochen.
```

**Zwei CTAs:**
- Primär: "Kostenlose Erstberatung" → zum Kontaktformular
- Sekundär: "Meine Leistungen ansehen" → zu #leistungen

**Trust-Indikatoren direkt unter den CTAs (klein):**
```
✓ Aus 17.000+ Nutzern getestete KI-Systeme
✓ Projekte in D-A-CH und Vietnam
✓ Kein Agentur-Overhead — direkt mit dem Entwickler
```

### 4.2 About Section (`components/sections/about.tsx`)

Schreibe eine persönliche Story nach dem **"Held-Reise"-Prinzip**:

1. **Problem**: "Ich habe jahrelang gesehen, wie Unternehmen tausende Euro für KI-Projekte ausgaben, die nie fertig wurden."
2. **Wendepunkt**: "2022 baute ich meinen ersten RAG-Bot — für eine Community mit 17.000 Mitgliedern. Er funktioniert heute noch."
3. **Expertise**: Stack nennen, echte Projekte nennen (ohne Kundennamen wenn nicht freigegeben)
4. **Unterschied**: "Ich arbeite alleine. Das bedeutet: kein Overhead, kein Telefonspiel, kein 3-monatiges Pflichtenheft."
5. **CTA**: "Sprechen wir über Ihr Projekt."

Foto-Platzhalter einbauen — Han liefert Fotos nach.

### 4.3 Process Section (`components/sections/process.tsx`)

3-Schritt-Prozess, konkret:

```
Schritt 1: "Analyse & Roadmap" (2–3 Tage)
→ Ich analysiere Ihre bestehenden Prozesse und zeige Ihnen 
  genau, wo KI den größten Hebel hat.

Schritt 2: "Entwicklung & Integration" (2–6 Wochen)
→ Ich baue die Lösung — iterativ, mit wöchentlichen Updates, 
  keine Überraschungen am Ende.

Schritt 3: "Übergabe & Begleitung" (laufend)
→ Vollständige Dokumentation, Training Ihres Teams, 
  optional: monatliche Weiterentwicklung.
```

---

## 5. PHASE 3 — UI/UX Redesign & Visuelle Schärfung

> **Modell:** Sonnet  
> **Skill: PFLICHT → `/ui-ux-pro-max` skill aktivieren vor dieser Phase**  
> **Priorität:** MITTEL-HOCH

### Vor dem Start: Skill laden

```
Lade den ui-ux-pro-max Skill. Er enthält Design-Prinzipien für 
professionelle B2B-Websites: Kontrast, Whitespace, Typografie-Hierarchie, 
Conversion-Optimierung, Dark Mode, micro-interactions.
```

### 5.1 Color System überarbeiten

Analysiere `tailwind.config.js` und `globals.css`. Das Ziel:

**Farb-Philosophie für KI-Beratung:**
- **Primär:** Tiefes Marineblau oder Schwarz → Kompetenz, Seriosität
- **Akzent:** Elektrisches Blau oder Mintgrün → KI, Innovation
- **Neutral:** Sehr helles Grau / Weiß → Klarheit, Professionalität
- Kein "KI-lila" (übersättigt, generisch) unless es bereits gut etabliert ist

Prüfe ob das aktuelle Farbschema diese Prinzipien erfüllt. Wenn nicht: überarbeiten.

### 5.2 Typography-Hierarchie

- **H1:** Sehr groß (64px+), bold, enge line-height
- **H2:** Klar abgesetzt (40px), Section-Überschriften immer mit Akzentfarbe-Element
- **Body:** 16-18px, max-width: 65ch für Lesbarkeit
- **Micro-Copy (Trust-Elemente):** 14px, muted

### 5.3 Service-Cards überarbeiten

Jede Service-Card soll:
1. Icon in Akzentfarbe (groß, ~48px)
2. Titel: 20px, bold
3. Kurzbeschreibung: 2-3 Zeilen max
4. "Mehr erfahren →" Link
5. Hover-State: subtile Elevation oder Border-Highlight
6. Highlighted Card (Top-2 Services): andersfarbiger Hintergrund + "Empfohlen" Badge

### 5.4 Mobile-First Check

```
- Hero auf 375px testen (iPhone SE)
- Service-Grid: 1 Spalte mobile, 2 Tablet, 3 Desktop
- CTA-Buttons: min 48px touch target
- Navigation: Hamburger-Menü smooth
```

### 5.5 Neue Sektion: "Social Proof / Zahlen"

Zwischen Services und About eine Zahlen-Sektion einfügen:

```
17.000+        4 Jahre          50%+
Community-     KI-Entwicklung   Zeitersparnis
Nutzer         Erfahrung        für Kunden
```

Design: Großes, fettes Typografie-Statement. Kein Hintergrundfarbenrummel.

---

## 6. PHASE 4 — GEO & SEO-Optimierung

> **Modell:** Sonnet  
> **Priorität:** MITTEL  
> **Hinweis:** GEO = Generative Engine Optimization (für ChatGPT, Perplexity, Google AI Overviews)

### 6.1 Metadata für alle Seiten

Jede Seite braucht in `layout.tsx` oder per `generateMetadata()`:

```typescript
title: "KI-Prozessautomatisierung für KMU | aio-consulting.de"
description: "Han Hoa Huynh baut Custom AI Agents und KI-Automatisierungen 
  für mittelständische Unternehmen. ROI in 4–8 Wochen messbar."
openGraph: { ... }
```

Ziel-Keywords:
- "KI Beratung Mittelstand"
- "Custom AI Agent entwickeln"
- "n8n Automatisierung beauftragen"
- "RAG Chatbot für Unternehmen"
- "KI-gestützte Webentwicklung"

### 6.2 Strukturierte Daten (Schema.org)

In `layout.tsx` einbauen:

```json
{
  "@type": "Person",
  "name": "Han Hoa Huynh",
  "jobTitle": "KI-Berater & Entwickler",
  "url": "https://aio-consulting.de",
  "knowsAbout": ["Artificial Intelligence", "Process Automation", "RAG Systems", ...]
}
```

### 6.3 FAQ-Sektion (kritisch für GEO)

KI-Suchmaschinen lieben FAQ-Schemas. Füge auf der Homepage und den Service-Seiten FAQ hinzu:

Beispiel-Fragen:
- "Was kostet ein KI-Chatbot für mein Unternehmen?"
- "Wie lange dauert die Entwicklung eines AI Agents?"
- "Was ist der Unterschied zwischen ChatGPT und einem Custom AI Agent?"
- "Für welche Unternehmensgröße lohnt sich KI-Automatisierung?"

Jede FAQ-Sektion mit `FAQPage` Schema.org Markup versehen.

### 6.4 Content-Tiefe auf Service-Seiten

Jede `/leistungen/[slug]` Seite braucht mindestens:
- 600+ Wörter strukturierten Content
- Konkrete Use Cases (2-3 Beispiele)
- Prozess-Erklärung
- FAQ (4-6 Fragen)
- CTA am Ende

---

## 7. PHASE 5 — Conversion-Optimierung

> **Modell:** Sonnet  
> **Priorität:** HOCH (direkt umsatzrelevant)

### 7.1 Kontaktformular überprüfen

```bash
cat /data/projects/aio-consulting.de/components/sections/contact.tsx
cat /data/projects/aio-consulting.de/app/api/contact/route.ts
```

Das Formular soll WENIGER Felder haben, NICHT mehr:
- Name ✓
- E-Mail ✓  
- Kurze Beschreibung des Projekts ✓
- ENTFERNEN: Telefon (Hürde), Unternehmensgröße (Hürde), etc.

Über dem Formular: "Ich antworte innerhalb von 24 Stunden."

### 7.2 Erstberatung als Produkt positionieren

Erstelle eine dedizierte Section oder ein Popup nach 30 Sekunden:

```
"30-Minuten KI-Check — kostenlos"
Ich schaue mir Ihre Prozesse an und zeige Ihnen konkret, 
wo KI Ihnen Zeit und Geld spart.
→ [Jetzt Termin vereinbaren]
```

Calendly-Link oder einfaches E-Mail-Formular.

### 7.3 Exit-Intent oder Sticky CTA

Am unteren Bildschirmrand (sticky, beim Scrollen sichtbar):
```
[Kostenlosen KI-Check buchen →]
```

Implementierung: `position: fixed`, bottom, nur auf Desktop, dismissible.

---

## 8. PHASE 6 — LinkedIn-Integration & Personal Branding

> **Modell:** Sonnet  
> **Priorität:** MITTEL  
> **Hinweis:** LinkedIn ist der wichtigste Akquise-Kanal für B2B KI-Consulting

### 8.1 LinkedIn-Links aktualisieren

Im About-Bereich: Link zu LinkedIn-Profil von Han Hoa Huynh einbauen.
Im Footer: LinkedIn-Icon + Link.

### 8.2 "Wie ich arbeite" Transparenz-Sektion

Neue Sektion oder About-Erweiterung:

```
"Ich arbeite von Vietnam aus — und das ist ein Vorteil für Sie."

Timezone-Flexibilität: Ich arbeite nach deutschen Bürozeiten 
ODER früh morgens, wenn Sie in der Nacht eine Idee hatten.

Keine Agentur: Sie sprechen immer direkt mit dem Entwickler. 
Kein Account-Manager, kein Telefonspiel.

KI-beschleunigt: Was früher 3 Monate dauerte, schaffe ich 
in 4-8 Wochen — weil ich selbst KI-Tools als Hebel einsetze.
```

### 8.3 Case Studies realistisch aufbauen

Mindestens 2 anonymisierte Case Studies erstellen (oder platzhalten für spätere):

**Template:**
```
Herausforderung: [Branche], [Problem]
Lösung: [Was wurde gebaut]
Ergebnis: [Messbare Verbesserung]
```

Bis echte Case Studies vorhanden sind: eigene Projekte als Use Cases darstellen
(z.B. "RAG-System für eine Community mit 17.000 Nutzern")

---

## 9. PHASE 7 — Performance & Deployment

> **Modell:** Haiku (mechanische Aufgaben)  
> **Priorität:** ABSCHLUSS

### 9.1 Quality Gate

```bash
cd /data/projects/aio-consulting.de
pnpm type-check    # MUSS 0 Fehler haben
pnpm lint          # Alle von dir eingeführten Fehler beheben
pnpm build         # MUSS erfolgreich sein
```

### 9.2 Performance-Check

```bash
# Lighthouse Score ziel: >90 Performance, >90 SEO
# Bildoptimierung: alle Bilder als next/image
# Font-Loading: font-display: swap
```

### 9.3 Deploy

```bash
./deploy.sh
```

---

## 10. OPTIONALE ERWEITERUNGEN (Backlog)

Diese Punkte kommen NACH den Hauptphasen, wenn die Site gut konvertiert:

### 10.1 Blog / KI-Insights (Content-Marketing)
- 1x pro Woche ein Artikel zu KI-Automatisierung
- Themen: "Wie ich einen n8n-Workflow für X baute", "Was kostet ein RAG-Chatbot wirklich?"
- Ziel: GEO-Sichtbarkeit in ChatGPT und Perplexity

### 10.2 "KI-Readiness-Check" Tool
- Interaktives 5-Fragen-Formular auf der Website
- Ergebnis: Score + personalisierte Empfehlung
- Lead-Magnet: Ergebnis per E-Mail mit weiterem Content

### 10.3 Testimonials-System
- Wenn erste Kunden vorhanden: Testimonial-Widget einbauen
- Schema.org Review-Markup

### 10.4 Newsletter-Integration
- E-Mail-Liste aufbauen: "KI-Tricks für KMU — wöchentlich"
- Tools: Resend + eigene Next.js-Seite

---

## 11. ABARBEITUNGSREIHENFOLGE (Roadmap)

```
TAG 1 (Sonnet):
  → Phase 2: Dateien lesen (Haiku)
  → Phase 1: data/services.ts neu schreiben
  → Phase 3: Hero- und About-Texte

TAG 2 (Sonnet + ui-ux-pro-max):
  → Phase 3: UI/UX Überarbeitung
  → Phase 5: Kontaktformular optimieren

TAG 3 (Sonnet):
  → Phase 4: SEO/GEO Metadata & Schema
  → Phase 6: LinkedIn-Integration
  → Phase 7: Quality Gate & Deploy

BACKLOG (keine Deadline):
  → Phase 10.1 Blog
  → Phase 10.2 KI-Readiness-Check
```

---

## 12. SKILLS DIE DIE AUSFÜHRENDE INSTANZ LADEN SOLL

| Phase | Skill | Warum |
|-------|-------|-------|
| Phase 3 (UI/UX) | `/ui-ux-pro-max` | Design-Prinzipien, Kontrast, Conversion-Patterns |
| Phase 6 (Marketing) | **kein Skill nötig** — Marketing-Prinzipien sind in diesem Dokument enthalten | — |
| Deployment | kein Skill | Standard Next.js |

**So lädst du den UI-UX-Skill:**
Schreibe am Anfang der UI-Phase: `/ui-ux-pro-max` — der Skill wird geladen und gibt dir Designrichtlinien für die konkrete Umsetzung.

---

## 13. WICHTIGE REGELN FÜR ALLE PHASEN

1. **SSOT:** Alle Service-Daten kommen aus `data/services.ts` — nie hardcoden
2. **DRY:** Vor jeder neuen Komponente prüfen ob es schon etwas ähnliches gibt
3. **Type-Safety:** `pnpm type-check` nach JEDER Phase
4. **Keine Fremden Bibliotheken** hinzufügen ohne Han zu fragen
5. **Mobile First:** Jede neue Section auf 375px testen
6. **Kein Generischer KI-Kram:** Keine Roboter-Illustrationen, keine blauen Gehirne — professionell und menschlich
7. **Fotos von Han:** Platzhalter einbauen mit `<Image src="/han-placeholder.jpg" />` — Han liefert eigene Fotos nach

---

*Erstellt: 2026-04-02 | Projekt: aio-consulting.de | Für Han Hoa Huynh*
