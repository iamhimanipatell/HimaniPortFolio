import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, FileText, Mail, Sparkles, MapPin, Star } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
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

  // Entrance animation for ID badge and gold stars
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // ID badge drops in on lanyard and swings to settle
      tl.from(badgeRef.current, {
        y: -120,
        rotation: 6,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.6)',
      });

      tl.from('.hero-badge-elem', {
        scale: 0.85,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'back.out(1.7)',
      }, '-=0.6');

      tl.from('.hero-gold-star', {
        scale: 0,
        rotation: 45,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'back.out(2)',
      }, '-=0.5');

      tl.from('.hero-cta-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-24 sm:pt-28 pb-14 px-3 sm:px-6 md:px-8 overflow-hidden z-10 bg-grid-paper"
    >
      {/* Scattered Gold 4-Point Stars (Decorative) */}
      <div className="hero-gold-star absolute top-24 left-6 sm:left-16 text-[#B08A4A] animate-twinkle select-none pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="hero-gold-star absolute top-36 right-8 sm:right-24 text-[#B08A4A] animate-twinkle select-none pointer-events-none">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="hero-gold-star absolute bottom-24 left-10 sm:left-24 text-[#B08A4A]/80 select-none pointer-events-none">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="hero-gold-star absolute bottom-32 right-12 sm:right-28 text-[#B08A4A]/80 select-none pointer-events-none">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Lanyard Strap / Metal Binder Clip at Top */}
        <div className="relative flex flex-col items-center z-30 select-none mb-[-12px]">
          {/* Lanyard Strip */}
          <div className="w-8 sm:w-10 h-10 sm:h-12 bg-[#3E1F1B] border-x border-[#B08A4A]/40 shadow-sm relative">
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#B08A4A]/40" />
          </div>

          {/* Metal Binder / Lanyard Clip */}
          <div className="w-12 sm:w-14 h-5 sm:h-6 rounded-t-sm bg-gradient-to-b from-[#C7A263] via-[#B08A4A] to-[#6E5023] border border-[#2B1512] shadow-sm flex items-center justify-center relative">
            {/* Metal ring cut-out */}
            <div className="w-4 h-2 rounded-full bg-[#3E1F1B]/90 border border-white/20" />
          </div>
        </div>

        {/* =========================================================================
            SIGNATURE ID BADGE CARD (Swings gently on hover / load)
        ========================================================================== */}
        <div
          ref={badgeRef}
          className="group relative w-full max-w-[340px] sm:max-w-md md:max-w-lg rounded-3xl bg-[#FBF8EF] border-2 border-[#3E1F1B] p-5 sm:p-7 md:p-8 shadow-badge transition-transform duration-500 hover:rotate-1 hover:shadow-2xl select-none"
        >
          {/* Washi Tape Corner */}
          <div className="washi-tape-strip washi-pink-gingham -top-3 -right-3 w-24 sm:w-28 rotate-12" />

          {/* Polka-Dot Sticker Tag on bottom-left */}
          <div className="washi-tape-strip washi-gold-dotted -bottom-3 -left-3 w-20 sm:w-24 -rotate-6" />

          {/* Badge Header Row */}
          <div className="hero-badge-elem flex items-center justify-between border-b-2 border-[#3E1F1B]/15 pb-3 mb-5 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B08A4A] animate-pulse" />
              <span className="font-serif uppercase tracking-widest text-[#3E1F1B] font-bold text-[11px] sm:text-xs">
                DEVELOPER PORTFOLIO
              </span>
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-[#F6F0DC] border border-[#B08A4A]/40 text-[#3E1F1B] font-semibold">
              ID // 2026-HP
            </span>
          </div>

          {/* Badge Profile Row: Photo Frame + Titles */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 mb-5">
            {/* Profile Photo in Rounded Arch Frame with Gold Star */}
            <div className="hero-badge-elem relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#3E1F1B] bg-[#F6F0DC] shadow-sm shrink-0">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded-full bg-[#3E1F1B] text-[#F7C8DA] text-[8px] font-mono font-bold">
                ENG
              </div>
            </div>

            {/* Name, Script Overlay & Tag */}
            <div className="hero-badge-elem flex flex-col items-center sm:items-start text-center sm:text-left min-w-0 flex-grow">
              <div className="inline-block relative">
                <h1 className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-[#3E1F1B] tracking-tight leading-tight">
                  Himani Patel
                </h1>
                <span className="absolute -top-3 sm:-top-4 -right-4 sm:-right-8 font-script text-3xl sm:text-4xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
                  Creator
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E1F1B] text-[#F6F0DC] font-serif text-xs tracking-wider uppercase font-semibold mt-1.5 mb-2.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#F7C8DA]" />
                <span>Software Engineer</span>
              </div>

              <p className="font-mono text-xs text-[#2B1512]/80 leading-relaxed max-w-xs">
                Building scalable full-stack products with .NET Core, Node.js, React, and IoT monitoring.
              </p>
            </div>
          </div>

          {/* Mini Metadata Grid inside Badge */}
          <div className="hero-badge-elem grid grid-cols-2 gap-2 p-3 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/15 text-left font-mono text-[11px] mb-4">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-[#B08A4A] font-bold block">
                LOCATION
              </span>
              <span className="font-semibold text-[#3E1F1B]">{personalInfo.location}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-[#B08A4A] font-bold block">
                TIMEZONE (IST)
              </span>
              <span className="font-semibold text-[#3E1F1B]">{currentTime || 'UTC+5:30'}</span>
            </div>
          </div>

          {/* Barcode Strip & Decorative Details */}
          <div className="hero-badge-elem pt-3 border-t-2 border-dashed border-[#3E1F1B]/20 flex items-center justify-between">
            <div className="h-6 w-32 sm:w-40 barcode-strip rounded-xs opacity-75" />
            <div className="text-right">
              <span className="font-mono text-[9px] text-[#3E1F1B]/60 block leading-tight">
                AUTHENTIC // HP-DEV
              </span>
              <span className="font-hand text-sm text-[#B08A4A] font-bold">
                verified engineer &hearts;
              </span>
            </div>
          </div>
        </div>

        {/* Quick Action Pill Buttons (Creator Media Kit CTAs) */}
        <div className="hero-cta-buttons flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 z-20">
          {/* View Projects */}
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, '#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3E1F1B] text-[#F6F0DC] font-serif font-bold text-xs sm:text-sm tracking-wider uppercase border border-[#B08A4A] shadow-md hover:bg-[#4A2722] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>View Featured Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[#F7C8DA]" />
          </a>

          {/* Resume & Background */}
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
