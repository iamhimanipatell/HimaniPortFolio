import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, FileText, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const heroRef = useRef(null);
  const posterRef = useRef(null);
  const [currentTime, setCurrentTime] = useState('');

  // Live Hyderabad Clock (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Entrance & Smooth Playful Floating Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      // 1. Entrance timeline
      tl.from(posterRef.current, {
        scale: 0.96,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Name title spring entrance
      tl.from('.hero-name-title', {
        scale: 0.85,
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.8)',
      }, '-=0.5');

      // Hand-drawn arrow pointing to HIMANI bounces in
      tl.from('.hero-name-arrow', {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 0.7,
        ease: 'elastic.out(1.2, 0.4)',
      }, '-=0.5');

      // Central person (himani1) slides up smoothly and clears opacity prop
      tl.fromTo('.hero-central-person', {
        y: 35,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        clearProps: 'opacity',
      }, '-=0.5');

      // Background polygon reveals with spring
      tl.from('.hero-polygon-bg', {
        scale: 0.88,
        opacity: 0,
        duration: 0.7,
        ease: 'back.out(1.4)',
      }, '-=0.7');

      // Floating annotations and doodles pop in
      tl.from('.hero-annotation-item', {
        scale: 0.7,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: 'back.out(1.7)',
      }, '-=0.5');

      // CTA buttons rise
      tl.from('.hero-cta-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.3');

      // 2. Playful Continuous Floating (Smooth sine-wave idle bobbing)
      gsap.to('.hero-doodle-laptop', {
        y: -8,
        rotation: 4,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-doodle-notebook', {
        y: 7,
        rotation: -4,
        duration: 3.1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.3,
      });

      gsap.to('.hero-doodle-star', {
        scale: 1.25,
        rotation: 15,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      });

      gsap.to('.hero-name-arrow', {
        x: 4,
        y: -3,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    if (window.__lenis) {
      window.__lenis.scrollTo(targetId, { offset: -40, duration: 1.2 });
    } else {
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[94vh] sm:min-h-screen flex flex-col justify-center items-center pt-20 sm:pt-24 pb-14 px-3 sm:px-6 md:px-8 overflow-hidden z-10 bg-grid-paper"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* =========================================================================
            CREATOR-EDITORIAL HERO COMPOSITION
            Name: HIMANI + Doodle Arrow, Location: Hyderabad, India
            Minimal Tech Doodles: Laptop (.CODE), Notebook (SPECS), Sparkle Stars
            himani1 Cutout: 100% Guaranteed Visible + Moves on Hover!
        ========================================================================== */}
        <div
          ref={posterRef}
          className="relative w-full max-w-[360px] sm:max-w-[540px] md:max-w-[640px] lg:max-w-[700px] px-2 sm:px-6 select-none"
        >
          {/* TOP GRAPHIC SUNBURST WEDGES (Top-Left Corner) */}
          <div className="hero-annotation-item absolute top-1 sm:top-2 left-2 sm:left-4 pointer-events-none z-10">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 sm:w-11 h-8 sm:h-11">
              <polygon points="4,4 16,1 12,14" fill="#3E1F1B" />
              <polygon points="12,18 24,14 18,26" fill="#3E1F1B" />
              <polygon points="18,30 30,26 22,38" fill="#B08A4A" />
            </svg>
          </div>

          {/* Minimal Doodle Sparkle Star (Top Left) */}
          <div className="hero-annotation-item hero-doodle-star absolute left-7 sm:left-12 top-10 sm:top-14 z-20 pointer-events-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#B08A4A]">
              <path d="M12 0L14.2 9.2L24 12L14.2 14.8L12 24L9.8 14.8L0 12L9.8 9.2L12 0Z" fill="currentColor"/>
            </svg>
          </div>

          {/* =====================================================================
              NAME HEADER: "HIMANI" + PLAYFUL HAND-DRAWN ARROW
          ====================================================================== */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 pr-2 sm:pr-4 mb-[-8px] sm:mb-[-14px] md:mb-[-20px] relative z-30">
            {/* Playful Hand-drawn Doodle Arrow pointing directly to HIMANI */}
            <div className="hero-name-arrow flex items-center shrink-0">
              <svg
                width="46"
                height="38"
                viewBox="0 0 52 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 sm:w-10 h-6 sm:h-8 text-[#3E1F1B] filter drop-shadow-xs"
              >
                {/* Looping playful curve pointing right to HIMANI */}
                <path
                  d="M6 34C14 36 24 30 22 18C20 8 10 12 12 22C14 32 26 30 42 16"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path
                  d="M34 14L43 16L40 24"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Name: HIMANI */}
            <h1 className="hero-name-title font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight leading-none uppercase select-none">
              HIMANI
            </h1>
          </div>

          {/* =====================================================================
              CENTRAL STAGE: FACETED SILHOUETTE BACKDROP & himani1 (CENTER)
              himani1 Cutout: 100% Guaranteed Visible + Moves on Hover!
          ====================================================================== */}
          <div className="relative w-full h-[370px] sm:h-[450px] md:h-[510px] flex items-center justify-center overflow-visible">
            {/* 1. FACETED POLYGON BACKDROP */}
            <div className="hero-polygon-bg absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <svg
                viewBox="0 0 380 480"
                className="w-[88%] sm:w-[84%] md:w-[80%] h-full filter drop-shadow-[0_12px_20px_rgba(43,21,18,0.25)]"
                preserveAspectRatio="none"
              >
                {/* Outer offset dashed gold contour */}
                <polygon
                  points="190,12 320,65 345,240 330,468 50,468 35,240 60,65"
                  fill="none"
                  stroke="#B08A4A"
                  strokeWidth="2.5"
                  strokeDasharray="8 6"
                />
                {/* Main faceted dark chocolate silhouette backdrop */}
                <polygon
                  points="190,22 310,72 335,240 320,460 60,460 45,240 70,72"
                  fill="#3E1F1B"
                />
              </svg>
            </div>

            {/* 2. THE HERO HIMANI1 CUTOUT — GUARANTEED VISIBLE & PLAYFUL ON HOVER */}
            <img
              src="/himani1.png"
              alt={personalInfo.name}
              loading="eager"
              decoding="sync"
              className="hero-central-person relative z-20 h-full w-auto max-w-none object-contain pointer-events-auto cursor-pointer filter drop-shadow-[0_18px_25px_rgba(43,21,18,0.4)] transition-transform duration-300 ease-out hover:scale-[1.04] hover:-translate-y-2 hover:rotate-1"
              style={{
                maxHeight: '100%',
                opacity: 1,
              }}
            />

            {/* 3. LEFT ANNOTATION WITH CURLY DOODLE ARROW: "Full-Stack & IoT" */}
            <div className="hero-annotation-item absolute left-0 sm:-left-3 top-16 sm:top-24 z-20 flex flex-col items-start max-w-[110px] sm:max-w-[130px]">
              <span className="font-sans font-bold text-xs sm:text-sm md:text-base text-[#3E1F1B] leading-tight select-none">
                Full-Stack &amp; IoT Engineer
              </span>
              {/* Curly Doodle Arrow pointing to Himani */}
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 ml-2 text-[#3E1F1B] transition-transform duration-300 hover:rotate-6">
                <path d="M8 4C4 12 4 20 12 24C20 28 24 22 22 16C20 12 14 14 16 22C18 30 26 32 34 32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M30 28L35 32L31 36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* 4. RIGHT ANNOTATION WITH CURLY DOODLE ARROW: "Hyderabad, India" */}
            <div className="hero-annotation-item absolute right-0 sm:-right-2 top-20 sm:top-28 z-20 flex flex-col items-end text-right max-w-[110px] sm:max-w-[130px]">
              <div className="flex items-center gap-1 text-[#3E1F1B] justify-end">
                <span className="font-sans font-bold text-xs sm:text-sm md:text-base leading-tight select-none">
                  Hyderabad, India
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#B08A4A] font-semibold">
                {currentTime || 'IST (UTC+5:30)'}
              </span>
              {/* Curly Doodle Arrow pointing toward her */}
              <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 mr-2 text-[#3E1F1B] transition-transform duration-300 hover:-rotate-6">
                <path d="M32 4C36 12 36 20 28 24C20 28 16 22 18 16C20 12 26 14 24 22C22 30 14 32 6 32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M10 28L5 32L9 36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* =====================================================================
                MINIMAL HAND-DRAWN TECH DOODLES (Laptop & Notebook & Stars)
            ====================================================================== */}
            {/* Minimal Doodle: Laptop (.CODE) */}
            <div className="hero-annotation-item hero-doodle-laptop absolute right-1 sm:-right-3 bottom-12 sm:bottom-16 z-20 select-none cursor-pointer hover:scale-110 active:scale-95 transition-transform">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-[#FBF8EF]/95 border-2 border-[#3E1F1B] shadow-md flex flex-col items-center">
                <svg width="42" height="34" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3E1F1B]">
                  {/* Laptop Screen */}
                  <rect x="6" y="4" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" fill="#F6F0DC"/>
                  {/* Code prompt on screen: >_ */}
                  <path d="M12 11L16 14L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 17H24" stroke="#B08A4A" strokeWidth="2" strokeLinecap="round"/>
                  {/* Base / Keyboard */}
                  <path d="M2 26C2 24.8954 2.89543 24 4 24H40C41.1046 24 42 24.8954 42 26L44 31C44 32.1046 43.1046 33 42 33H2C0.89543 33 0 32.1046 0 31L2 26Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" fill="#FBF8EF"/>
                  <path d="M17 28H27" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <span className="font-mono text-[8px] text-[#B08A4A] font-bold tracking-wider mt-0.5">.CODE</span>
              </div>
            </div>

            {/* Minimal Doodle: Notebook (SPECS) */}
            <div className="hero-annotation-item hero-doodle-notebook absolute left-1 sm:-left-3 bottom-10 sm:bottom-14 z-20 select-none cursor-pointer hover:scale-110 active:scale-95 transition-transform">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-[#FBF8EF]/95 border-2 border-[#3E1F1B] shadow-md flex flex-col items-center">
                <svg width="36" height="38" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3E1F1B]">
                  {/* Notebook Page */}
                  <rect x="8" y="4" width="26" height="32" rx="3" stroke="currentColor" strokeWidth="2.2" fill="#F6F0DC"/>
                  {/* Spiral Bindings */}
                  <path d="M5 9H11M5 15H11M5 21H11M5 27H11M5 33H11" stroke="#B08A4A" strokeWidth="2.2" strokeLinecap="round"/>
                  {/* Notes / Lines */}
                  <path d="M15 12H28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M15 17H25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <path d="M15 22H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  {/* Corner Star Accent */}
                  <path d="M26 27L27 29L29 30L27 31L26 33L25 31L23 30L25 29L26 27Z" fill="#B08A4A"/>
                </svg>
                <span className="font-mono text-[8px] text-[#B08A4A] font-bold tracking-wider mt-0.5">SPECS</span>
              </div>
            </div>

            {/* Sparkle Star (Bottom Right) */}
            <div className="hero-annotation-item hero-doodle-star absolute right-14 sm:right-20 bottom-36 sm:bottom-44 z-20 pointer-events-none">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#3E1F1B]">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* =====================================================================
              BOTTOM USERNAME / SOCIAL PILL
          ====================================================================== */}
          <div className="hero-annotation-item flex items-center justify-center mt-2 mb-2 relative z-20">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-dashed border-[#3E1F1B] bg-[#FBF8EF] text-[#3E1F1B] hover:bg-[#3E1F1B] hover:text-[#F6F0DC] font-mono text-xs sm:text-sm font-bold shadow-xs transition-all duration-300 hover:scale-105"
            >
              <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse" />
              <span>@iamhimanipatell</span>
            </a>
          </div>

          {/* One-line Pitch text */}
          <p className="hero-headline-item text-center font-mono text-xs sm:text-[13px] text-[#2B1512]/80 leading-relaxed max-w-md mx-auto mt-2">
            Building scalable full-stack products with .NET Core, Node.js, React, SQL Server and MongoDB, plus IoT monitoring systems.
          </p>
        </div>

        {/* =========================================================================
            HERO CALL TO ACTION BUTTONS
        ========================================================================== */}
        <div className="hero-cta-buttons flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7 z-20">
          {/* View Featured Projects */}
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3E1F1B] text-[#F6F0DC] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#B08A4A] shadow-md hover:bg-[#4A2722] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>View Featured Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[#F7C8DA]" />
          </a>

          {/* Developer Profile */}
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F7C8DA] text-[#3E1F1B] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#3E1F1B]/30 shadow-md hover:bg-[#EEB1C7] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#3E1F1B]" />
            <span>Developer Profile</span>
          </a>

          {/* Contact Pill */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FBF8EF] text-[#3E1F1B] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#3E1F1B]/20 shadow-md hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#B08A4A]" />
            <span>Let's Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
}