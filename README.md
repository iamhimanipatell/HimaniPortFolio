# Himani Patel — Personal Portfolio Website (Creator-Style Editorial Scrapbook Edition)

A warm, aesthetic, editorial developer portfolio website built for **Himani Patel**, Software Engineer based in Hyderabad, India.

Designed with a **creator-style editorial media kit** aesthetic—blending the elegance of high-contrast display typography (DM Serif Display & Playfair Display), romantic overlapping script (Pinyon Script), tactile scrapbook elements (ID badge with lanyard clip, butter yellow sticky notes, washi tape strips, polaroids, phone mockups with white bezels, spec sheet tables, gold 4-point stars, and grid-paper textures)—while maintaining crisp readability and strict WCAG AA contrast for technical recruiters.

---

## 🎨 Theme & Color System

- **Chocolate Brown**: `#3E1F1B` (main dark sections, badge background, buttons)
- **Deeper Brown**: `#2B1512` (high-contrast text on cream)
- **Cream**: `#F6F0DC` (main light canvas with subtle paper noise)
- **Paper White**: `#FBF8EF` (cards & polaroid frames)
- **Soft Butter Yellow**: `#E3DAA0` (sticky notes & highlights)
- **Blush Pink**: `#F7C8DA` & **Light Pink**: `#FCE7EF` (pill buttons, badges & stickers)
- **Gold-Brown Accent**: `#B08A4A` (4-point stars, thin borders, badges)
- **Grid-Paper Lines**: `#D9D2B8` at low opacity on cream and yellow sections
- **Dark Pinstripes**: Subtle pinstripe pattern on brown sections

---

## ✒️ Typography Pairing

- **Display Serif**: `DM Serif Display` & `Playfair Display` for bold headlines and section titles
- **Flowing Script**: `Pinyon Script` for overlapping titles and accents
- **Handwritten**: `Caveat` for sticky notes and captions
- **Clean Body & Mono**: `Plus Jakarta Sans` & `DM Mono` for technical descriptions

---

## ⚡ Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS with custom editorial design tokens
- **Animation**: GSAP 3.12 (ScrollTrigger)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Deployment**: Vercel CI/CD via GitHub

---

## ✨ Signature Components

1. **Hero ID Badge (`Hero.jsx`)**:
   - Cream card suspended on a lanyard with metal binder clip.
   - Serif "DEVELOPER PORTFOLIO", flowing script "Himani Patel", pill badge "Software Engineer", rounded photo frame, decorative barcode strip, and washi-tape corner.
   - Gently swings on load and on hover.
2. **"Why Work With Me?" Sticky Notes (`WhyWorkWithMe.jsx`)**:
   - 4 butter-yellow sticky notes with patterned washi tape (gingham, dotted, floral).
   - Real claims: Full-stack builder, Performance-minded (25% faster load, 40% faster upload), Team player (Agile team lead), Quick learner.
   - Lift and straighten on hover with gold 4-point star dividers.
3. **About / "Hey, I'm Himani" (`About.jsx`)**:
   - Split layout:
     - Left chocolate brown panel with script greeting, bio narrative, polaroid with binder clip, and "building cool stuff ✨" sticker.
     - Right cream "DEVELOPER PROFILE" spec sheet table card with structured rows: Location, Core stack, Backend, Frontend, Databases, Practices, Education, and Cognizant status.
4. **"What I Can Build" Capabilities (`Services.jsx`)**:
   - 4 cream cards with thin rounded borders (rate-card style with NO prices):
     1. Full-Stack Web Applications
     2. REST APIs & Backend Systems
     3. Dashboards & Real-Time UIs
     4. IoT Monitoring Systems
5. **Featured Projects (`Projects.jsx`)**:
   - Displayed inside rounded phone and browser mockups with white bezels on grid paper.
   - Case-study block in serif & script (Project, Concept, Built with, Highlights).
   - Preserves all projects: **Pet-Boarding**, **Stitch Noor**, **Blossom Planner**, **Gift Shop React**, and **Figma UI/UX 1 & 2**.
6. **Technical Repertoire (`Skills.jsx`)**:
   - Brown pill buttons grouped by category.
   - Infinite marquee strip of white circular tech-logo badges.
7. **Career Timeline (`Experience.jsx`)**:
   - Stacked cream cards with gold star markers and an animated vertical line that draws itself on scroll.
8. **Education & Credentials (`Education.jsx`)**:
   - Lovely Professional University B.Tech CSE degree diploma card.
   - 3 verified certification cards with modal lightbox proof.
9. **Contact & Editorial Dispatch (`Contact.jsx`)**:
   - Chocolate brown section with large serif "LET'S CONNECT &" and script "Collaborate!".
   - Rounded arch photo frame, round icon buttons, blush pink pill mailto button, and direct message composer.
10. **Footer (`Footer.jsx`)**:
    - Monospace scrapbook footer: `/// @himanipatel — software engineer editorial media kit`.

---

## 🚀 How to Run & Deploy

```powershell
# Run locally
npm run dev

# Build for production
npm run build

# Push changes (Vercel will auto-deploy)
git add .
git commit -m "Redesign portfolio to creator-style editorial scrapbook theme"
git push origin main
```
