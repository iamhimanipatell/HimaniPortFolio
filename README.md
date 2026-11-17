# Himani Patel — Personal Portfolio Website

A modern award-style developer portfolio website built for **Himani Patel**, Software Engineer based in Hyderabad, India.

Built with **React + Vite**, **Tailwind CSS**, **GSAP with ScrollTrigger**, and **Lenis Smooth Scroll**. Designed with high-performance animations, fluid cursor interactions, and responsive design systems.

---

## ⚡ Tech Stack & Architecture

- **Core Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS with custom design system (CSS variables, obsidian/mint color palette)
- **Animation Engine**: GSAP 3.12 with ScrollTrigger
- **Smooth Scrolling**: Lenis (synchronized with GSAP ticker)
- **Icons**: Lucide React
- **Typography**: `Syne` (display) + `Plus Jakarta Sans` (body) + `JetBrains Mono` (code & stats)
- **Hosting & Deployment**: Vercel (static zero-config build)

---

## ✨ Key Features & Animation Architecture

1. **Cinematic Preloader**: Animated name reveal (`HIMANI PATEL`) with dynamic percentage counter and split curtain reveal.
2. **Hero Section**:
   - Split-word reveal animation.
   - Live Hyderabad time clock (IST, UTC+5:30).
   - Real-time particle constellation canvas (60fps, mouse-reactive, battery & DPR friendly).
   - Magnetic CTA buttons ("View Projects", "Resume & Background", "Contact Me").
3. **About Section**:
   - Confident narrative and styled portrait.
   - Animated counter cards for key metrics: **25% Faster Page Loads**, **40% Faster Content Uploads**, **15+ Agents Supported**, and **Agile Team Leadership**.
4. **Experience Vertical Timeline**:
   - Custom SVG timeline progress line that draws itself on scroll using ScrollTrigger scrub.
   - Pulsing milestone nodes.
   - Highlights roles at **Cognizant (PAT)**, **Cognizant (IoT .NET Full-Stack Intern & Agile Team Leader)**, and **NNIIT (Full-Stack Intern)**.
5. **Projects Showcase**:
   - **Featured Projects at top**:
     - **Pet-Boarding & Hostel** (ASP.NET Core, SQL Server, React.js, JWT)
     - **Stitch Noor** (React.js, Node.js, Express.js, MongoDB, JWT, Multer)
   - **Preserved Existing Projects**:
     - **Blossom Planner** (https://blossom-planner.vercel.app/)
     - **Gift Shop React** (https://gift-shoppp.onrender.com/)
     - **Modern Clothing UX 1** (Figma Prototype)
     - **Clothing Website Ui/Ux 2** (Figma Prototype)
   - Category filtering (All, Full Stack, Frontend, UI/UX).
   - Direct GitHub and Live Demo buttons on every card.
6. **Skills & Arsenal**:
   - Continuous 60fps infinite marquee ticker.
   - Interactive category tabs (Languages, Backend, Frontend, Databases, IoT, Cloud & DevOps, Practices) with proficiency gauges.
7. **Education & Certifications**:
   - **B.Tech CSE**, Lovely Professional University (2022-2026), CGPA 7.68.
   - Verified credential showcase for Coursera, Ebox, and NPTEL certifications with interactive preview lightbox modal.
8. **Contact & Animated Footer**:
   - One-click copy email button with instant feedback.
   - Interactive direct mailto message composer.
   - Direct phone, LinkedIn, and GitHub links.
   - Smooth "Back to Top" scroll action.
9. **Accessibility & Performance**:
   - Full support for `prefers-reduced-motion` (gracefully disables smooth scroll and heavy motions).
   - Custom desktop cursor follower (auto-disabled on touch/mobile devices).
   - Complete SEO meta tags, Open Graph card, Twitter card, and custom SVG favicon.

---

## 🗂 Project Structure

```
├── public/                     # Static assets (images, certificates, favicon)
│   ├── BlossomPlanner.png
│   ├── finalestphot.JPG
│   ├── PetBoardingAndHostel.png
│   ├── ReactGiftShop.png
│   ├── Stitch_Noor.png
│   ├── Uiux.png
│   ├── uiux2.png
│   ├── favicon.svg
│   └── images/                 # Certificate proofs
│       ├── cloudcomputingcertificate.png
│       ├── DataStructurescertificate.png
│       └── Frontendwebdevelopmentcertificate.png
├── src/
│   ├── components/
│   │   ├── About.jsx           # Bio, portrait, key metrics
│   │   ├── Contact.jsx         # Contact form, direct links, clipboard copy
│   │   ├── CustomCursor.jsx    # Fluid desktop cursor with magnetic states
│   │   ├── Education.jsx       # LPU degree and certificate lightbox
│   │   ├── Experience.jsx      # Animated vertical drawing timeline
│   │   ├── Footer.jsx          # Animated footer, links & back to top
│   │   ├── Hero.jsx            # Split-word headline, live clock & CTAs
│   │   ├── MagneticButton.jsx  # Elastic physics-based magnetic CTA interaction
│   │   ├── Navbar.jsx          # Glassmorphic floating navigation dock
│   │   ├── ParticlesBackground.jsx # 60fps canvas constellation
│   │   ├── Preloader.jsx       # Name reveal and curtain transition
│   │   ├── Projects.jsx        # Project grid with category filtering
│   │   └── Skills.jsx          # Infinite marquee & categorized skills
│   ├── data/
│   │   └── portfolioData.js    # Single central data file for all content
│   ├── App.jsx                 # Main layout & Lenis/GSAP integration
│   ├── index.css               # Design tokens, fonts, and animation CSS
│   └── main.jsx                # React root mount
├── legacy/                     # Archived previous portfolio code (backup)
├── index.html                  # HTML entry point with SEO & Google Fonts
├── tailwind.config.js          # Custom theme, tokens, and animations
├── vite.config.js              # Vite build configuration
├── vercel.json                 # Vercel deployment configuration
└── package.json
```

---

## ⚙️ Easily Edit Content (Single Data File)

All text, projects, links, skills, and experience items are centrally configured in:
`src/data/portfolioData.js`

To update a project, change a link, or add a skill, simply edit that single file—the entire UI updates automatically.

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized static assets in the `dist/` directory.

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Vercel

### Option 1: Automatic GitHub Integration (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Build modern award-style developer portfolio"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..."** &rarr; **"Project"**.
4. Select the repository and click **Deploy**.
   Vercel auto-detects Vite and deploys your site in under 60 seconds.

### Option 2: Deploy with Vercel CLI
```bash
npx vercel
```
Follow the CLI prompts to deploy directly.
