# 🎨 Visit Jølster - Design Showcase Implementering

## ✅ Hva er gjort

Jeg har laget et komplett system for å vise frem alle designvariantene for Visit Jølster sin nettside via GitHub Pages.

## 📁 Nye Filer

### 1. designs.html - Hovudoversikt
En visuell showcase-side som viser alle 6 designvariantene:
- Iframe-forhåndsvisninger av kvert design
- Beskrivelser av kvar designvariant
- Lenker til å sjå fullstendig versjon av kvart design
- Responsivt design som fungerer på mobil og desktop

### 2. design-nav.js - Navigasjonswidget
Ein flytande navigasjonsknapp som vises på alle designsider:
- 🎨-ikon i nedre høgre hjørne
- Klikk for å opne meny med alle design
- Enkel byting mellom design utan å gå tilbake til oversikta
- Automatisk markering av noverande design
- Mobilvennlig

### 3. README.md - Dokumentasjon
Komplett dokumentasjon med:
- Oversikt over alle sider
- GitHub Pages lenker
- Deployment-instruksjoner
- Prosjektstruktur

## 🔄 Modifiserte Filer

Alle designfiler har fått lagt til navigasjonswidgeten:
- index.html (hovuddesign)
- design1.html
- design2.html  
- design3.html
- design4.html
- design6.html

## 🌐 Slik fungerer det

### For å sjå nettsidene når dei er publiserte:

1. **Merge denne PR til `main`-branchen**
   - GitHub Actions vil automatisk deploye til GitHub Pages
   
2. **Tilgjengelege URL-ar** (etter merge):
   - Hovudside: `https://mcbels.github.io/visitJolstra/`
   - Design Showcase: `https://mcbels.github.io/visitJolstra/designs.html`
   - Design 1: `https://mcbels.github.io/visitJolstra/design1.html`
   - Design 2: `https://mcbels.github.io/visitJolstra/design2.html`
   - Osv...

### Navigasjon mellom design:

**Alternativ 1: Bruk navigasjonswidgeten**
- Klikk på 🎨-ikonet i nedre høgre hjørne
- Velg ønsket design frå menyen
- Klikk "Alle Design" for å gå til showcase-sida

**Alternativ 2: Via Design Showcase**
- Gå til `designs.html`
- Sjå forhåndsvisning av alle design
- Klikk "Sjå fullstendig design" for å opne

## 🎯 Fordelar med denne løsninga

1. ✨ **Visuell Oversikt** - Showcase-sida viser alle design side ved side
2. 🔄 **Enkel Navigasjon** - Byt mellom design med eitt klikk
3. 📱 **Mobilvennlig** - Fungerer perfekt på alle einingar
4. 🎨 **Profesjonell** - Pent designa showcase og navigasjon
5. 🚀 **Ingen ekstra steg** - Automatisk deployment via GitHub Actions

## 📸 Visuelt Eksempel

```
┌─────────────────────────────────────────┐
│         designs.html                     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │Design 1 │  │Design 2 │  │Design 3 │  │
│  │Preview  │  │Preview  │  │Preview  │  │
│  └─────────┘  └─────────┘  └─────────┘  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │Design 4 │  │Design 6 │  │  Main   │  │
│  │Preview  │  │Preview  │  │ Design  │  │
│  └─────────┘  └─────────┘  └─────────┘  │
└─────────────────────────────────────────┘
```

Når du er på ein designside:
```
┌─────────────────────────────────────────┐
│         index.html                       │
│                                          │
│  [Innhald av nettsida]                   │
│                                          │
│                                  ┌─────┐ │
│                                  │ 🎨  │ │ ← Navigasjonswidget
│                                  └─────┘ │
└─────────────────────────────────────────┘
```

## 🚀 Neste Steg

1. **Merge denne PR** til `main`-branchen
2. **Vent på deployment** (GitHub Actions kjører automatisk)
3. **Besøk** `https://mcbels.github.io/visitJolstra/designs.html`
4. **Utforsk** alle designvariantene!

---

**Merk:** GitHub Pages blir automatisk oppdatert når endringer merges til `main` via den eksisterande `.github/workflows/static.yml` workflow-fila.
