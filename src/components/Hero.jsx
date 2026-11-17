import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, FileText, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const heroRef = useRef(null);
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

  // Split-text animation using GSAP
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

      tl.from('.hero-word', {
        y: 80,
        opacity: 0,
        rotateX: -30,
        stagger: 0.08,
        duration: 1.0,
        ease: 'power4.out',
      }, '-=0.4');

      tl.from('.hero-pitch', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6');

      tl.from('.hero-actions', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

      tl.from('.hero-meta', {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.4');
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
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden z-10"
    >
      {/* Subtle ambient radiant glow behind the hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-[#00f5a0]/10 via-[#00d8f6]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Availability & Location Pill */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151e]/80 border border-white/10 backdrop-blur-md mb-8 hover:border-[#00f5a0]/40 transition-all shadow-lg shadow-black/40">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5a0] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f5a0]" />
          </span>
          <span className="text-xs font-mono text-slate-300 font-medium tracking-wide">
            {personalInfo.availability}
          </span>
          <span className="hidden sm:inline text-white/20">&bull;</span>
          <span className="hidden sm:flex items-center gap-1 text-xs font-mono text-slate-400">
            <MapPin className="w-3 h-3 text-[#00f5a0]" />
            {personalInfo.location}
          </span>
        </div>

        {/* Big Expressive Title with Split Words */}
        <div className="overflow-hidden mb-4">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white">
            <span className="hero-word inline-block mr-3 sm:mr-4">Himani</span>
            <span className="hero-word inline-block bg-gradient-to-r from-[#00f5a0] via-[#00f5d4] to-[#00d8f6] bg-clip-text text-transparent">
              Patel
            </span>
          </h1>
        </div>

        {/* Role Subheading */}
        <div className="overflow-hidden mb-6">
          <p className="hero-word text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-300 flex items-center justify-center gap-2">
            <span className="text-[#00f5a0] font-mono text-base sm:text-xl">&lt;</span>
            <span className="tracking-wide">Software Engineer</span>
            <span className="text-[#00f5a0] font-mono text-base sm:text-xl">/&gt;</span>
          </p>
        </div>

        {/* One-Line Pitch */}
        <div className="hero-pitch max-w-2xl mx-auto mb-10">
          <p className="text-base sm:text-lg md:text-xl text-slate-300/90 leading-relaxed font-normal">
            {personalInfo.pitch}
          </p>
        </div>

        {/* Hero Actions / Buttons */}
        <div className="hero-actions flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14">
          {/* 1. View Projects Button */}
          <MagneticButton strength={0.35}>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-[#00f5a0] text-[#07080b] font-display font-bold text-sm sm:text-base tracking-wide transition-all duration-300 hover:bg-[#00e290] hover:shadow-[0_0_30px_rgba(0,245,160,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </MagneticButton>

          {/* 2. Download Resume Button */}
          <MagneticButton strength={0.25}>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-surface-2/90 text-white font-display font-medium text-sm sm:text-base border border-white/10 hover:border-[#00f5a0]/50 hover:bg-surface-3 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-black/40"
            >
              <FileText className="w-4 h-4 text-[#00f5a0]" />
              <span>Resume &amp; Background</span>
            </a>
          </MagneticButton>

          {/* 3. Contact Button */}
          <MagneticButton strength={0.25}>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-transparent text-slate-300 hover:text-white font-display font-medium text-sm sm:text-base border border-transparent hover:border-white/10 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-slate-400 group-hover:text-[#00f5a0] transition-colors" />
              <span>Contact Me</span>
            </a>
          </MagneticButton>
        </div>

        {/* Live Status Indicators (City Time, Core Frameworks) */}
        <div className="hero-meta w-full pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00d8f6]" />
            <span>HYDERABAD, IN:</span>
            <span className="text-white font-medium">{currentTime || 'IST (UTC+5:30)'}</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-500">CORE FOCUS:</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">.NET Core</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">React.js</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">Node.js</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">SQL &amp; MongoDB</span>
            <span className="px-2 py-0.5 rounded bg-[#00f5a0]/10 text-[#00f5a0] border border-[#00f5a0]/30 font-semibold">IoT Systems</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, '#about')}
          className="text-[11px] font-mono tracking-widest uppercase text-slate-400 flex flex-col items-center gap-1"
          aria-label="Scroll to About section"
        >
          <span>EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#00f5a0] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
