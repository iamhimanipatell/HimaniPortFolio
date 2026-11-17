import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, FileText, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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

  // Floating stickers parallax and text reveal
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('.hero-badge-tag', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });

      tl.from('.hero-headline-name', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.3');

      tl.from('.hero-script-overlay', {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(2)',
      }, '-=0.5');

      tl.from('.hero-polaroid', {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.5)',
      }, '-=0.6');

      tl.from('.hero-sticker', {
        scale: 0,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'back.out(2)',
      }, '-=0.4');

      // Mouse parallax only on desktop
      if (window.innerWidth >= 768) {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const x = (clientX / window.innerWidth - 0.5) * 18;
          const y = (clientY / window.innerHeight - 0.5) * 18;

          gsap.to('.hero-sticker-float', {
            x: (i) => (i % 2 === 0 ? x * 1.2 : -x * 1.2),
            y: (i) => (i % 2 === 0 ? y * 1.2 : -y * 1.2),
            duration: 0.8,
            ease: 'power1.out',
          });
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
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
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 md:px-8 overflow-hidden z-10 w-full max-w-full"
    >
      {/* Decorative Scrapbook Stickers & Doodles (Desktop) */}
      <div className="hidden md:block hero-sticker hero-sticker-float absolute top-24 left-8 text-3xl select-none animate-float-slow">
        🌸
      </div>
      <div className="hidden md:block hero-sticker hero-sticker-float absolute top-36 right-12 text-3xl select-none animate-float-gentle">
        💖
      </div>
      <div className="hidden md:block hero-sticker hero-sticker-float absolute bottom-28 left-12 text-2xl select-none animate-float-gentle">
        ✨
      </div>
      <div className="hidden md:block hero-sticker hero-sticker-float absolute bottom-32 right-16 text-3xl select-none animate-float-slow">
        ⭐
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Scrapbook Typography & Badges */}
        <div className="lg:col-span-7 flex flex-col items-start text-left w-full min-w-0">
          {/* Retro OS Status Badge */}
          <div className="hero-badge-tag inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#D9C7A0] border-2 border-[#1E1B18] shadow-retro-sm mb-4 sm:mb-6 max-w-full">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#8A9A2B] animate-pulse shrink-0" />
            <span className="font-pixel text-[9px] sm:text-xs text-[#1E1B18] uppercase tracking-wider font-bold truncate">
              SYSTEM ONLINE &bull; HYDERABAD, IN
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-[#5A0B16] font-semibold shrink-0">
              [{currentTime || 'IST'}]
            </span>
          </div>

          {/* Headline Container with Overlapping Script */}
          <div className="relative mb-4 sm:mb-6 w-full min-w-0">
            <h1 className="hero-headline-name font-serif font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#5A0B16] tracking-tight leading-[1.0] sm:leading-[0.95]">
              Himani <br />
              <span className="text-[#1E1B18]">Patel</span>
            </h1>

            {/* Overlapping Cursive Script */}
            <span className="hero-script-overlay absolute -top-3 sm:-top-6 left-24 sm:left-40 md:left-48 font-script text-2xl sm:text-5xl lg:text-7xl text-[#E0147E] -rotate-6 select-none pointer-events-none drop-shadow-[2px_2px_0px_#FBF8EF] whitespace-nowrap">
              Software Engineer
            </span>

            {/* Handwritten Doodle Annotation (Tablet/Desktop) */}
            <div className="hidden lg:flex items-center gap-2 absolute -right-8 top-1/2 translate-y-2 hero-doodle-arrow">
              <svg width="40" height="30" viewBox="0 0 45 35" fill="none" className="rotate-12">
                <path d="M5 25C15 10 30 12 38 18M38 18L32 10M38 18L30 22" stroke="#E0147E" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-hand text-base text-[#E0147E] font-bold whitespace-nowrap">
                full-stack &amp; IoT!
              </span>
            </div>
          </div>

          {/* One-Line Pitch */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-[#D9C7A0]/70 border-2 border-[#1E1B18] shadow-retro-sm max-w-xl mb-6 w-full">
            <p className="font-mono text-xs sm:text-sm md:text-base text-[#1E1B18] leading-relaxed">
              {personalInfo.pitch}
            </p>
          </div>

          {/* Retro CTAs: View Projects, Resume, Contact */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-6 sm:mb-8 w-full">
            {/* View Projects */}
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#E0147E] text-white font-pixel text-[11px] sm:text-xs border-2 border-[#1E1B18] shadow-retro-sm sm:shadow-retro hover:bg-[#F06EAF] hover:text-[#1E1B18] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>VIEW PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Download Resume / Background */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#8A9A2B] text-white font-pixel text-[11px] sm:text-xs border-2 border-[#1E1B18] shadow-retro-sm sm:shadow-retro hover:bg-[#A4B634] hover:text-[#1E1B18] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME &bull; CV</span>
            </a>

            {/* Contact Pill */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#FBF8EF] text-[#5A0B16] font-mono text-xs font-bold border-2 border-[#1E1B18] shadow-retro-sm hover:bg-[#E9E7CB] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#E0147E]" />
              <span>Say Hello</span>
            </a>
          </div>

          {/* Quick Core Stack Tags */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap font-mono text-[11px] sm:text-xs text-[#1E1B18] w-full">
            <span className="font-pixel text-[9px] sm:text-[10px] text-[#5A0B16] font-bold">TOOLS:</span>
            <span className="px-2 py-0.5 rounded bg-[#FBF8EF] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18]">.NET Core</span>
            <span className="px-2 py-0.5 rounded bg-[#FBF8EF] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18]">React.js</span>
            <span className="px-2 py-0.5 rounded bg-[#FBF8EF] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18]">Node.js</span>
            <span className="px-2 py-0.5 rounded bg-[#FBF8EF] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18]">SQL &amp; MongoDB</span>
            <span className="px-2 py-0.5 rounded bg-[#F06EAF] text-white font-bold border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18]">IoT Systems</span>
          </div>
        </div>

        {/* Right Column: Retro Polaroid Portrait Collage */}
        <div className="lg:col-span-5 flex justify-center w-full mt-4 lg:mt-0">
          <div className="hero-polaroid relative w-full max-w-[270px] sm:max-w-xs md:max-w-sm sm:rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Washi tape on top */}
            <div className="washi-tape washi-tape-gingham -top-3 left-1/2 -translate-x-1/2 w-28 sm:w-36 -rotate-2" />

            {/* Main Polaroid Frame */}
            <div className="polaroid-card p-3 sm:p-5 rounded-2xl relative w-full">
              {/* Photo Area */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden border-2 border-[#1E1B18] bg-[#D9C7A0]">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter contrast-105"
                  loading="eager"
                />
                {/* Stamp overlay */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-[#FBF8EF]/95 border border-[#1E1B18] rounded font-pixel text-[8px] sm:text-[9px] text-[#5A0B16] rotate-3 shadow-sm">
                  VERIFIED // HP
                </div>
              </div>

              {/* Polaroid Footer with Handwritten Note */}
              <div className="pt-3 pb-1 text-center">
                <p className="font-hand text-xl sm:text-2xl text-[#5A0B16] font-bold">
                  Himani Patel &hearts;
                </p>
                <p className="font-mono text-[11px] sm:text-xs text-[#8A9A2B] font-semibold">
                  Software Engineer &bull; Hyderabad
                </p>
              </div>
            </div>

            {/* Sticky tag contained cleanly */}
            <div className="absolute -bottom-3 left-2 sm:-left-6 bg-[#FBF8EF] border-2 border-[#1E1B18] rounded-xl px-2.5 py-1 shadow-retro-sm -rotate-3 select-none">
              <span className="font-hand text-sm sm:text-base text-[#E0147E] font-bold">
                that's me! 🌸
              </span>
            </div>

            {/* Retro Floppy Disk Sticker */}
            <div className="absolute -top-3 right-2 sm:-right-4 bg-[#D9C7A0] border-2 border-[#1E1B18] rounded-xl px-2 py-1 shadow-retro-sm rotate-6 flex items-center gap-1">
              <span className="text-xs">💾</span>
              <span className="font-pixel text-[8px] text-[#1E1B18] font-bold">1.44MB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
