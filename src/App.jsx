import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Editorial Scrapbook Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll synchronized with GSAP ScrollTrigger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const rafTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    // Section fade & slide up on scroll
    const ctx = gsap.context(() => {
      const sections = document.querySelectorAll('main > section:not(#hero)');
      sections.forEach((sec) => {
        gsap.from(sec, {
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
          },
          y: 28,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        });
      });
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafTicker);
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F6F0DC] text-[#2B1512] selection:bg-[#F7C8DA] selection:text-[#3E1F1B] antialiased overflow-x-hidden paper-grain">
      {/* Intro Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Slim Pill Navbar */}
      <Navbar />

      {/* Main Editorial Scrapbook Sections */}
      <main className="relative z-10 flex flex-col gap-6 sm:gap-10">
        {/* 1. Hero / First Page */}
        <Hero />

        {/* 2. Developer Profile & Bio (About Me) */}
        <About />

        {/* 3. Career Experience Timeline */}
        <Experience />

        {/* 4. Featured Projects & Case Studies */}
        <Projects />

        {/* 5. Technical Repertoire (Skills) */}
        <Skills />

        {/* 6. Academic Rigor (Education) */}
        <Education />

        {/* 7. Communication Dispatch (Contact) */}
        <Contact />
      </main>

      {/* Monospace Scrapbook Footer */}
      <Footer />
    </div>
  );
}
