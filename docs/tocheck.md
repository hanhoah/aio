# To Check nach Deploy

Änderungen die nach dem nächsten Deploy geprüft werden müssen.

---

## Session 2026-04-10

### Sitemap (`app/sitemap.ts`)
- [ ] `https://aio-consulting.de/sitemap.xml` aufrufen — muss alle 10 Seiten listen
- [ ] In GSC unter *Sitemaps* einreichen

### Chatbot (neu — Session 2026-04-10)
- [ ] Chat-Button unten rechts erscheint auf allen Seiten
- [ ] Chat öffnen → Begrüßungsnachricht erscheint
- [ ] Suggested Questions testen (z.B. "Was kostet ein Chatbot?")
- [ ] Antwort kommt gestreamt (sichtbar Wort für Wort)
- [ ] `/leistungen/custom-ai-agents` → "Live-Demo" Sektion ist sichtbar
- [ ] **Wichtig vor Deploy:** `DEEPSEEK_API_KEY` in Vercel Environment Variables eintragen!

### Footer: "Projekt anfragen" Link (`components/layout/footer.tsx`)
- [ ] Von einer Unterseite (z.B. `/leistungen/ki-beratung`) im Footer auf "Projekt anfragen →" klicken
- [ ] Erwartet: Weiterleitung zur Startseite **und** direktes Scrollen zum Kontaktformular (`#kontakt`)
