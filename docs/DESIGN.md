# Mangal India: Design System

Prepared 28 October 2026 for the Mangal India website (Next.js, GSAP, Lenis), from your content file and the GreenBasket reference image, with the frontend-design skill applied.

## 1.1 Subject, audience and job
Mangal India (Krishna Mohan Exports) imports premium fresh and dry fruits from 12 countries for Indian buyers and now exports Indian rice, mangoes and vegetables, starting with Dubai. The audiences are Indian wholesale buyers, Gulf and international importers, and overseas growers and suppliers. The site’s job is to prove scale quickly (8+ years, 400+ containers, 12 countries), show reach on one map, and send each visitor to the right enquiry form. The memorable element is the world-map trade story.

## 1.2 Where each decision comes from
- **Reference image (layout language)**: airy light hero; very large serif headline; a script line above it; produce cut-out bursting out of its container and overlapping the next band; a floating badge on the photo; rounded cards with a circular icon badge overlapping the image edge; a split section with copy on one side and a UI-style panel on the other; a deep brand-colour band for the numbers.
- **Content file (locked)**: palette, Fraunces with Manrope, all copy, the map specification, the button spec (48 px high, 6 px radius, pomegranate), accessibility and SEO rules.
- **Conflicts and how they were settled**:
  - (a) The image is green grocery retail, but the content file’s palette is navy, pomegranate, tangerine, teal and gold, and the map colours carry meaning, so the palette stays.
  - (b) The content file asks for a full-bleed navy hero with glass number cards, while the image has a light hero: the light hero wins, the glass cards are dropped and the numbers sit on a flat navy band.
  - (c) The tracked uppercase eyebrow above the H1 is replaced by the script line ‘Harvests in. Horizons out.’, moved up from the sign-off position. The H1 and sub-text are unchanged, word for word.

## 1.3 Concept and principles
A light, airy hero in the spirit of the reference, then a page that alternates cream and navy bands. The navy map band is the one loud moment and the only pinned, scroll-driven sequence. Everything else stays calm: photography, confident serif type, rules instead of boxes.

1. Spend boldness on the map. Everything around it is quiet and disciplined.
2. Photography persuades. Type is large and confident but never decorative.
3. Structure carries information. Numbers appear only on the five-step ‘How we trade’ sequence. Chips are only for countries and products. Rules and borders mean ‘these belong together’.
4. Real content only. Never invent copy, numbers, addresses or contacts; unknown items use the `[CONFIRM]` helper.
5. Quality floor on every page: responsive from 360 px, visible keyboard focus, reduced motion respected, WCAG 2.2 AA.

## 1.4 Review against the brief (what changed from my first draft)
My first draft was a full-bleed navy hero with five glass cards, three identical rounded pathway cards, an uppercase eyebrow above every heading, dot-joined country lists and a fade-up on every section. That is the default look for a trading website, so it was revised:
- **Hero**: light and cream per the reference; the photo breaks its frame and overlaps the navy band instead of glass cards.
- **Pathways**: three editorial rows with large type and a rule between them, not three identical cards.
- **Eyebrow labels** removed everywhere. Section headings stand alone.
- **Country and product lists** become chips or table rows, never ‘A · B · C’ strings.
- **Radii** follow a hierarchy (6 / 14 / 20 / 28) instead of one radius on everything, and shadows are tinted navy and appear only on hover.
- **No scroll-triggered fade-ups**. Motion is limited to the hero entrance, count-up numbers, the pinned map story, and responses to touch or hover.
- **The script face** appears exactly twice: the hero line and the founder’s signature.

## 1.5 Colour

| Token | Hex | Use |
| :--- | :--- | :--- |
| `midnight` | `#0B2545` | Header, bands, map canvas, headlines on cream |
| `pomegranate` | `#C62839` | Primary CTA, India on the map, logo accent |
| `cream` | `#FFF6EC` | Page base |
| `tangerine` | `#F28C28` | Dry fruits, map. Fill or text on navy only |
| `teal` | `#13A89E` | Fresh fruits, map. On cream use `teal-ink` `#0E7C86` |
| `gold` | `#F5B83D` | Dubai and exports. On navy, or as a fill with navy text |
| `ink` | `#1B1F23` | Body text on cream |

**Derived tokens**:
- `navy-deep`: `#071A31` (footer, final CTA)
- `navy-land`: `#12335E` (map land)
- `cream-deep`: `#F6E7D3` (alternate sections)
- `muted`: `#4B5563` (secondary text on cream)
- `line`: `rgba(11,37,69,0.12)`
- `on-navy-muted`: `rgba(255,246,236,0.72)`

Colour is used in bold blocks, never as thin decoration, and there are no gradients except a soft cream vignette behind the hero photo. Every text pair must pass AA (4.5:1 body, 3:1 large).

## 1.6 Typography
- **Display**: Fraunces variable, weight 700, SOFT 40, opsz automatic. Headlines and numerals.
- **Body and UI**: Manrope 400 / 500 / 700.
- **Script**: Gwendolyn. Two uses only (hero line, founder signature).

| Style | Size (mobile to desktop) | Line height | Notes |
| :--- | :--- | :--- | :--- |
| `h1 hero` | 38 to 64 px | 1.06 | tracking `-0.02em` |
| `h2` | 32 to 48 px | 1.1 | max width `20ch` |
| `h3` | 22 to 28 px | 1.2 | |
| `numerals` | 48 to 72 px | 1 | Fraunces, tabular lining figures |
| `lead` | 20 to 22 px | 1.5 | |
| `body` | 17 to 18 px | 1.6 | Manrope, 68 characters maximum per line |
| `reading serif` | 20 px | 1.7 | founder message only, 680 px column |
| `small` | 14 px | 1.45 | |
| `label` | 13 px | 1.3 | sentence case, weight 700 |

Exception from the brief: the logo subtext ‘Krishna Mohan Exports’ is small, uppercase and widely tracked. No other uppercase.

## 1.7 Layout and sizing
- **Grid**: 12 columns, content max width 1280 px, bleed max 1440 px, gutter 24 px, page margin `clamp(20px, 4vw, 64px)`.
- **Spacing scale (4 px base)**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section padding `clamp(72px, 9vw, 128px)` top and bottom.
- **Breakpoints**: 480, 768, 1024, 1280, 1536.
- **Radius**: 6 px buttons and inputs; 14 px images inside cards; 20 px cards; 28 px map frame; 999 px chips and badges.
- **Shadow**: none at rest on cream (use a 1 px line). Hover `0 12px 32px rgba(11,37,69,0.14)`. Floating badge `0 8px 24px rgba(11,37,69,0.18)`.
- **Buttons**: 48 px high (40 px small), 24 px horizontal padding, hover lifts 2 px. Primary is the only button with a circular arrow icon. Touch targets at least 44 px.
- **Header**: 76 px desktop, 64 px mobile, sticky; transparent over the hero, solid navy after 24 px of scroll.
- **Alignment**: all text left-aligned. Centred only for the final statement.
- **Colour rhythm on the home page**: hero cream, numbers navy, import/export cream, map navy, products cream, India network cream-deep, why cream, founder cream-deep, exports navy with gold, how we trade cream, pathways cream-deep, final statement navy, footer navy-deep.

## 1.8 Wireframes (desktop)
Hero and numbers:
```
+---------------------------------------------------------------------+
| Mangal India / Krishna Mohan Exports    About Products ... [Business Enquiry]
|                                                                     |
|  Harvests in. Horizons out.  (script)            .--------------.   |
|  Mangal India: The Leading                       | cut-out fruit |   |
|  Importer and Exporter of                        | bursting from |   |
|  Premium Fresh & Dry Fruits.                     | a kraft       |   |
|  sub-text (52ch)                                 | export carton |   |
|  [Start a Trade Enquiry (o)] [Explore Our Map]   '--+----------'    |
|  Global reach  Premium fruits  Great quality    [12 countries badge]|
+---------------------------------------------------------+-----------+
| NAVY  8+ | 400+ | 16+ | 12 | 10+  (pomegranate rules, count-up)    |
+---------------------------------------------------------------------+
```
Import / export split (cream):
```
| One firm. Two engines of trade.                                     |
| IMPORT column (navy outline)      | EXPORT column (gold rule)       |
| copy + [Explore Imports]          | copy + [Explore Exports]        |
```
Map band (navy, pinned on desktop):
```
+---------------------------------------------------------------------+
| [12 countries / 6 continents]        full-width stylised world map  |
|                                      glowing countries + arcs      |
| left caption changes in 4 stages     India red, Dubai gold ring     |
| (home market, fresh, dry, export)                                   |
| legend bar: Fresh | Dry | Both | Dubai | India                      |
+---------------------------------------------------------------------+
```
- **Products (cream)**: three tall category cards (Fresh fruits, Dry fruits, Export range), each with a photo, a circular icon badge overlapping the photo’s bottom-left corner, and the product names as chips. Mobile is a scroll-snap carousel.
- **India network (cream-deep)**: India map on the left with four outlet dots and five ring markers; on the right the two lists and the CTA.
- **Founder (cream-deep)**: portrait left, pull-quote in large Fraunces right, button.
- **Exports (navy, gold)**: large headline left; right, a stacked list of Rice, Mangoes by air, Vegetables by air, Dubai shop.
- **Pathways (cream-deep)**: three full-width rows, each with the audience name in Fraunces, one line of copy and the CTA at the right, separated by rules.

## 1.9 Motion plan
- Lenis smooth scroll site-wide (duration 1.1, native touch scroll on mobile), driven by the GSAP ticker.
- One orchestrated entrance on the hero: headline lines reveal, the photo rises 40 px, the script line fades in. Under one second.
- Count-up on the numbers strip and the map counter, once, with the final value always in the DOM.
- The pinned map sequence: India glows, fresh arcs draw, dry arcs draw, the gold arc runs to Dubai.
- Responses to action only: button lift, dropdowns, accordion, bottom sheet, map tooltips.
- Reduced motion: no Lenis, no pin, no reveals; final states are shown.

## 1.10 Writing rules
Sentence case. Copy and CTA labels come only from the content file; a CTA names the exact action and keeps that name through the flow. Errors say what went wrong and how to fix it, without apology. Never publish INTERNAL NOTE, VISUAL DIRECTION or VERIFY boxes.

## 1.11 Open issues to settle with the client
- ‘8+ years’ conflicts with the founder’s 2020 start. Settle before launch.
- The founder’s sign-off says ‘Krishna Mohan Exports Pvt Ltd’ while the lock-up never shows Pvt Ltd. Keep as supplied and confirm with legal.
- ‘The Leading Importer and Exporter’ is a comparative claim. Keep evidence on file; the fallback line is in the content file.
- The hero sub-text has a comma splice and a missing word. It is published exactly as supplied unless the client approves the polished alternative.
- All `[CONFIRM]` items: email, phone or WhatsApp, office address, Dubai shop details, team inboxes, social links, founder portrait, logo files.
