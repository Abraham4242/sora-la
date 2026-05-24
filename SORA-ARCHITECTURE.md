# SORA · System Architecture

*La Compañía · v 0.4 · May 2026*

This document explains how the whole Sora system is organized, what each piece does, and how everything connects. Read this once if you're joining the team or coming back after time away.

---

## 1. Two perspectives

### External · what the world touches

| Person | What they use | What they do |
|---|---|---|
| **Prospective guest** (discovery) | `sora/web/index.html` | Reads the marketing site, sees country chapters, registers via form or WhatsApp |
| **Invited member** (with code) | `sora/app/index.html` (PWA) | Browses Cerca, swipes Conecta, opens experiences, RSVPs to weekends |
| **External investor / partner** | `sora/web/index.html` + `LATAM/dashboard.html` | Sees the brand surface + the operational rigor |

### Internal · what the team touches

| Person | What they use | What they do |
|---|---|---|
| **Abraham** (founder, English) | `sora-hq.html` → all surfaces | Strategy, product, country planning, deploy |
| **Abdiel** (operator, Spanish) | `sora-hq.html` → `admin.html` + `outreach/MX/` | Day-to-day ops, property listings, reservation pipeline, outreach execution |
| **Future LATAM hosts** (per country) | `admin.html` (their country scope) | Add events / experiences / properties for their chapter |

---

## 2. The four product surfaces

Everything users see lives in one of four HTML surfaces. Each does ONE job.

### a) Marketing site — `/sora/web/index.html`
**Public, English + Spanish, country-switchable.**
- Hero, "How it works", weekend events grid, day experiences grid, real estate listings, registration form, invitation form, floating WhatsApp button.
- Reads `sora/data.js` for events / experiences / properties, filtered by the currently-selected country.
- Reads per-country WhatsApp + email + Instagram/TikTok/Facebook from data.js + admin overrides.
- Two forms: **Registrarse** (general signup, anyone) and **Invitación** (for people with a code, the original gate).
- Every form submission both saves to `localStorage.sora.requests` and opens a pre-filled WhatsApp message.

### b) PWA app — `/sora/app/index.html`
**Invited members only, mobile-first.**
- 13 screens: welcome → invite code → onboarding (4 steps) → location → home (Eventos) → cerca · conecta · experiencias · calendario · perfil → saved · inbox → event detail.
- Hash deep linking: `#welcome`, `#invite`, `#onboard-N`, `#home`, `#cerca`, `#conecta`, `#experiencias`, `#calendar`, `#profile`, `#saved`, `#inbox`, `#event-N`, `#exp-ID`, `#rsvp`, `#match`.
- State + sessions: `localStorage.sora.state` (onboarded · name · prefs · party · cercaIdx · matches).
- Country switcher in home top bar → opens bottom sheet of 15 countries, picks one, filters Cerca + Experiencias.
- Conecta profiles stay cross-country (people, not places).
- Service worker (`sw.js`) + manifest (`manifest.webmanifest`) make it installable + offline-capable.

### c) Admin panel — `/sora/web/admin.html`
**Private. Password-gated.**
- Login: user `AEDMsora` + password `AEDMempresa2026` (default — changeable in Configuración tab; SHA-256 hashed).
- 4 tabs: **Propiedades**, **Usuarios y reservas**, **Configuración**, **Ayuda**.
- Country selector top-right scopes the whole panel.
- Property form has country selector; saves to `localStorage.sora.properties`.
- Reservations tab reads `localStorage.sora.requests`. Export to CSV.
- Configuración is per-country (whatsapp + email + IG + TT + FB); saves to `localStorage.sora.config.byCountry`.
- "Exportar todo" → downloads `sora-overrides.js` for production deploy (paste alongside `data.js` to override defaults).

### d) Preview & flows — `/sora/app/preview.html`
**Internal demo tool.**
- 3 modes: **Flujos** (6 guided walkthroughs with numbered pagination), **Interactivo** (24-screen jumper), **Galería** (all 24 screens at once).
- iPhone 14 Pro Max simulated frame (430 × 932).
- Used to demo + QA before deploy. Not deployed publicly.

---

## 3. Data architecture · single source of truth

All multi-country data lives in **`/sora/data.js`**. Loaded by all three surfaces.

```js
window.SORA_DATA = {
  meta: { version, updated, defaultCountry, brand },
  countries: [ /* 15 country definitions: code, name, flag, tier, status, hero */ ],
  config:    { PA: {whatsapp, email, instagram, tiktok, facebook}, MX: {...}, ... },
  events:    [ /* country-scoped weekend events */ ],
  experiences: [ /* country-scoped day experiences */ ],
  properties:  [ /* country-scoped real estate */ ]
}

window.soraData = {
  countriesShown(includeSoon),
  byCode(code),
  eventsFor(country),
  experiencesFor(country),
  propertiesFor(country),
  configFor(country),
  loadEffective()   // merges admin localStorage overrides on top of defaults
}
```

**Why this works:**
- Single file → web, admin, PWA all read the same data
- Adding a country = adding one entry to `countries`
- Adding an event = adding one entry to `events` with the right `country` code
- Admin edits live in `localStorage.sora.*` keys, layered on top of defaults

**Override flow for production:**
1. Abdiel edits in admin (saves to localStorage on his browser)
2. Hits **"Exportar todo"** → downloads `sora-overrides.js`
3. Uploads `sora-overrides.js` to the deployed Netlify site root
4. All future visitors get the new data without redeploying `data.js`

---

## 4. Knowledge architecture · where strategy lives

```
/lacompania/
├── sora-hq.html              ← Command Center (entry point)
├── SORA-ARCHITECTURE.md      ← This file
├── sora/
│   ├── app/
│   │   ├── index.html        ← PWA app
│   │   ├── preview.html      ← Preview & QA tool
│   │   ├── DEPLOY.md         ← Deploy guide (Netlify + Capacitor)
│   │   ├── manifest.webmanifest
│   │   ├── sw.js
│   │   └── icons/
│   ├── web/
│   │   ├── index.html        ← Marketing site
│   │   └── admin.html        ← Admin panel (gated)
│   ├── data.js               ← Single source of truth
│   └── events-playbook.html  ← Brand + operations doc
└── LATAM/
    ├── _OVERVIEW.md          ← Master expansion strategy
    ├── dashboard.html        ← Live news + comparison dashboard
    ├── MX-mexico.md          ← Mexico chapter (full playbook)
    ├── CO-colombia.md        ← Colombia chapter
    ├── BR-brazil.md          ← Brazil chapter
    ├── AR-argentina.md       ← Argentina chapter
    ├── CR-costa-rica.md      ← Costa Rica chapter
    ├── PE-peru.md            ← Peru chapter
    ├── CL-chile.md           ← Chile chapter
    ├── UY-uruguay.md         ← Uruguay chapter
    ├── PA-panama.md          ← Panama chapter (origin)
    ├── VE-venezuela.md       ← Venezuela chapter (Abraham's home)
    ├── DO-dominican-republic.md
    ├── GT-guatemala.md
    ├── EC-ecuador.md
    ├── PR-puerto-rico.md
    ├── CU-cuba.md
    └── outreach/
        └── MX/               ← Mexico outreach package (13 drafts)
            ├── _README.md    ← Sequencing
            ├── lawyers-mijares.md
            ├── lawyers-galicia.md
            ├── lawyers-de-la-vega.md
            ├── hosts-cdmx-jobpost.md
            ├── hosts-tulum-jobpost.md
            ├── hosts-direct-template.md
            ├── lodging-casa-polanco.md
            ├── lodging-habitas-tulum.md
            ├── lodging-hotel-matilda.md
            ├── lodging-hotel-sin-nombre.md
            ├── lodging-bruma-wine-garden.md
            ├── talent-chefs-template.md
            └── realestate-brokers-template.md
```

**Three categories of knowledge:**

1. **Strategy** — `LATAM/_OVERVIEW.md`, `LATAM/[country].md`, `SORA-ARCHITECTURE.md`. The "why" + "what" of each market.
2. **Operations** — `sora/events-playbook.html`, `sora/app/DEPLOY.md`, `LATAM/outreach/[country]/`. The "how-to" of executing.
3. **Live data** — `LATAM/dashboard.html`. The "what's happening right now" view, with Google News headlines per country.

---

## 5. Operations architecture · per-chapter playbook

Every chapter (live, launching, or future) follows the same 4-step setup:

```
1. LEGAL    →  form the right entity (SAPI / SAS / Ltda / SRL / SAC / SpA)
2. HOSTS    →  hire 1-2 local hosts ($1.5-3k/mo USD)
3. LODGING  →  sign 4-6 boutique hotels / posadas / lodges (15-25% commission)
4. TALENT   →  build a network of 2-3 chefs + 1-2 music/cultural + 1 wellness
              + 1 real estate broker (3% sell-side)
```

For **Mexico** (the chapter currently in active outreach), every step has drafted emails in `/LATAM/outreach/MX/`. When you open Colombia / Brazil / Argentina next, the same template structure will live in `/LATAM/outreach/CO/`, `/BR/`, `/AR/`.

The HQ Command Center (`sora-hq.html`) shows the outreach pipeline visually with checkbox progress, persisted in localStorage.

---

## 6. Deployment architecture

### Current state
All files run locally via `file://`. Open `sora-hq.html` directly in a browser; everything works.

### Path to production
**Step 1 · Drag-drop Netlify (5 min)**
1. Go to `app.netlify.com/drop`
2. Drag the entire `/lacompania/` folder onto the drop zone
3. Get a URL like `https://radiant-marigold-12345.netlify.app`
4. Rename to `sora-panama.netlify.app` in Site Settings → Site Name

**Step 2 · Custom domain (15 min)**
1. Buy `sora.travel` or similar from Cloudflare Registrar (~$10-15/year)
2. In Netlify → Domain Settings → Add custom domain
3. Update DNS at Cloudflare (CNAME)
4. HTTPS auto-configured via Let's Encrypt

**Step 3 · Per-country subdomains (future)**
- `sora.travel` → landing
- `pa.sora.travel`, `mx.sora.travel`, etc. → country chapters with their data pre-selected
- Configured in Netlify's redirects or Cloudflare Workers

**Step 4 · App Store + Play Store via Capacitor** (post-PMF)
- Wrap the PWA via Capacitor (`npx cap add ios` + `npx cap add android`)
- Submit to App Store ($99/year Apple, $25 once Google)
- Distribution = the only difference from current PWA

**Detailed deploy guide:** `/sora/app/DEPLOY.md`

---

## 7. Multi-country routing strategy

When the marketing site goes live with multiple country chapters, here's how country selection flows:

1. **First visit** — defaults to Panamá (or geo-IP detected if we add that). User can change via the flag selector in nav.
2. **Selection persists** — saved to `localStorage.sora.country`. Next visit shows the same country.
3. **Deep links** — the marketing site URL can include `?country=MX` (future) to pre-select for shared links.
4. **Inside a country** — all weekend/experience/property cards filter to that country's data automatically.
5. **Cross-country discovery** — the country selector dropdown shows all 15 with status pills, so users discover the network even when they're in one specific chapter.

---

## 8. Reservation pipeline · how a user becomes a guest

```
1. Visitor discovers the marketing site → reads chapter content
2. Visitor clicks WhatsApp on an event card → opens WhatsApp with pre-filled message
3. Visitor OR fills the public form → saved to localStorage.sora.requests
4. Visitor's data appears in admin panel under "Usuarios y reservas" tab
5. Abdiel/Abraham reads, replies via WhatsApp, decides
6. If approved → manually issue an invite code (current process is off-platform — could automate)
7. Visitor enters the PWA app with their invite code → onboarding → full member experience
8. Member RSVPs to events via the app → saved to state
9. Pre-event, host follows up via WhatsApp → confirms logistics
10. Post-event, member's stats update in their profile + invites others
```

**Today this is mostly manual + WhatsApp-based.** When volume grows, automate steps 4-7 via a Supabase backend (see `DEPLOY.md §7`).

---

## 9. Future extensions (in priority order)

1. **Per-country outreach packages** — `/LATAM/outreach/CO/`, `/BR/`, `/AR/` — same template as MX, for the next 4 chapters.
2. **Backend** — Supabase (free tier ~5k users). Move reservations + properties + matches from localStorage to a real DB so multiple admins can see the same data + visitors aren't browser-locked.
3. **Real images** — replace SVG scenes with actual photography per event / experience / property. Cloudinary or just bundled `webp` files.
4. **Email channel** — connect form submissions to Formspree or a tiny Cloudflare Worker that fwd's to email + Slack.
5. **News digest email** — once a week, the LATAM dashboard sends a summary of headlines per country to a list.
6. **Per-country subdomains** — `pa.sora.travel`, `mx.sora.travel`, etc.
7. **Real chat in inbox** — replace the static demo conversations with a working message thread.
8. **Member portal beyond invitation** — registered users (not just invited) get a lighter app experience: see public events, save favorites, follow chapters, etc.
9. **Mobile App Store distribution** — Capacitor wrap, TestFlight beta, then full App Store + Play Store.
10. **Booking + payments** — direct USDC + bank checkout for events and experiences. Phase 4 once trust + volume justify it.

---

## 10. Conventions

### Naming
- All HTML files in `kebab-case.html`
- All Markdown chapter files use country code + name: `MX-mexico.md`, `CO-colombia.md`
- localStorage keys all namespaced `sora.*`
- Image scenes named by region: `mirador`, `bocas`, `finca`, `bosque`, `termas`, `night`, `tierra`

### Brand
- Wordmark always **`SORA`** with subscript "Travel Agency" (where space allows)
- Always "Una colección de **La Compañía**" in attribution
- Primary palette: cream + green + coral + mango + gold
- Serif: **Fraunces** (display) + **Instrument Serif** (h1 wordmark)
- Sans: **Inter** (UI + body)
- Mono: **JetBrains Mono** (data + system)

### Language
- Default español for public-facing PA / VE / CO / MX content
- English fallback for everything
- Abraham writes content in English first → translates to Spanish
- Abdiel writes content in Spanish first → I translate to English

### Multi-country data
- Every event, experience, property MUST have a `country` field (ISO 2-letter code)
- Every config block lives keyed by country code
- The `_` key in config is the global fallback when no country is selected

---

## 11. Where to start (depending on what you need)

- **I want to see the whole thing** → open `sora-hq.html`
- **I want to add a property** → open `sora/web/admin.html`, log in, select country, "+ Agregar propiedad"
- **I want to see what news is happening in Argentina today** → open `LATAM/dashboard.html`, click Argentina row
- **I want to read the strategy for Brazil** → open `LATAM/BR-brazil.md`
- **I want to send the first Mexico outreach email** → open `LATAM/outreach/MX/_README.md`, follow Phase 1
- **I want to deploy** → open `sora/app/DEPLOY.md`, follow §1
- **I want to demo the app to someone** → open `sora/app/preview.html`, switch to "Flujos" mode, walk through "Crear cuenta"
- **I want to remember what was built when** → look at the version + build line in `sora-hq.html` footer

---

*Sora · La Compañía · 2026 · One brand, fifteen chapters, one continent.*
