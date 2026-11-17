# Himani Patel — Personal Portfolio Website (Y2K Retro-Desktop Scrapbook Edition)

An aesthetic, playful, feminine-tech personal portfolio website built for **Himani Patel**, Software Engineer based in Hyderabad, India.

Designed with a **Y2K retro-desktop scrapbook** aesthetic—blending the nostalgia of a retro operating system (Windows 98 / MS Paint windows, draggable title bars, beveled buttons) with an aesthetic collage scrapbook (polaroids, washi tape strips, doodle arrows, handwritten notes, and floating stickers)—while maintaining clean typography and WCAG AA contrast for recruiters.

---

## 🎨 Theme & Design System

- **Color Palette**:
  - Background cream/sand: `#E9E7CB` (main canvas with subtle paper noise)
  - Warm beige: `#D9C7A0` (cards & toolbars)
  - Taupe: `#A08C6E` (accents & gradients)
  - Olive green: `#8A9A2B` (window titlebars & badges)
  - Bubblegum pink: `#F06EAF` & Hot magenta: `#E0147E` (CTAs & washi tape)
  - Deep burgundy: `#5A0B16` & `#7A1020` (floating nav pill & headlines)
  - Off-white: `#FBF8EF` (polaroids & paper notes)
  - Ink: `#1E1B18` (high-contrast text passing WCAG AA)
  - Cyan glow: `#7DF3FF` (subtle glass HUD highlights)
- **Typography**:
  - `Silkscreen`: Retro pixel font for window titlebars, tabs, and tags
  - `Playfair Display`: High-contrast elegant serif for main headlines
  - `Pinyon Script`: Romantic cursive script for overlapping headline accents
  - `Caveat`: Handwritten doodle annotations and arrows
  - `DM Mono`: Clean monospace for technical descriptions and stats

---

## ⚡ Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS with custom retro design tokens
- **Animation**: GSAP 3.12 (ScrollTrigger + Draggable)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Deployment**: Vercel CI/CD via GitHub

---

## ✨ Scrapbook Components & Features

1. **Retro Boot Preloader**: Retro dialog (`Himani_OS_v2.0.exe`) with a segmented progress bar and floating bouncy stickers.
2. **Draggable Windows (`RetroWindow.jsx`)**:
   - Olive-to-tan gradient titlebars with pixel titles (`about_himani.exe`, `projects_showcase.exe - Paint`, etc.).
   - Playful close button `✕` that does a cartoon shake instead of closing.
   - Desktop drag-and-drop powered by **GSAP Draggable** (automatically disabled on mobile).
3. **Hero Collage**:
   - Grand serif headline *Himani Patel* with overlapping script *Software Engineer*.
   - Profile photo framed as a Polaroid with washi tape and verified stamp.
   - Hand-drawn SVG doodle arrows and handwritten notes (`"hi, that's me! ✨"`, `"full-stack & IoT"`).
   - Floating stickers (🌸, 💖, ✨, ⭐) with mouse parallax.
4. **Social Dashboard Bento Grid (About)**:
   - Profile header card with key metric counters.
   - Stat cards: **25% faster page loads**, **40% faster content uploads**, **15+ agents supported**, **Agile team leadership**.
5. **Projects Showcase**:
   - 8-color theme swatch palette divider.
   - Polaroid cards with washi tape, hand-drawn demo arrows, and hot pink pill buttons.
   - Frosted glass HUD variant with thin cyan corner brackets and "now playing" header.
   - Preserves all projects: **Pet-Boarding**, **Stitch Noor**, **Blossom Planner**, **Gift Shop React**, and **Clothing UX 1 & 2** (Figma).
6. **Skills & Toolbox**:
   - Infinite marquee ticker of technologies with retro pixel stars.
   - Categorized MS Paint toolbar tabs with segmented volume equalizer bars.
7. **Experience File Explorer**:
   - File explorer log layout with an animated SVG timeline path drawing on scroll.
8. **Contact & Footer**:
   - Retro Outlook Express '98 email composer (`compose_message.exe`) with direct mailto transmitter and copyable email.
   - Monospace scrapbook footer: `/// @himanipatel — software engineer scrapbook ver 2.0`.

---

## 🚀 How to Run & Deploy

```powershell
# Run locally
npm run dev

# Build for production
npm run build

# Push changes (Vercel will auto-deploy)
git add .
git commit -m "Redesign portfolio to Y2K retro-desktop scrapbook theme"
git push origin main
```
