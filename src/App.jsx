import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
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

  // Initialize Lenis Smooth Scroll with GSAP ScrollTrigger Synchronization
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    // Expose lenis instance globally for smooth anchor navigation
    window.__lenis = lenis;

    // Connect Lenis scroll events to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const rafTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.__lenis = null;
      lenis.destroy();
      gsap.ticker.remove(rafTicker);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07080b] text-[#f1f5f9] selection:bg-[#00f5a0] selection:text-[#07080b] antialiased overflow-x-hidden">
      {/* Intro Preloader Animation */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Subtle Canvas Particles Background */}
      <ParticlesBackground />

      {/* Sticky Blurred Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col gap-12 sm:gap-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Animated Footer */}
      <Footer />
    </div>
  );
}
