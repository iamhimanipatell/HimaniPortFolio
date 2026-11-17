import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gauge, Zap, Users, Award, CheckCircle2 } from 'lucide-react';
import RetroWindow from './RetroWindow';
import { personalInfo, keyStats } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-bento-card', {
        scrollTrigger: {
          trigger: '.about-bento-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getStatIcon = (id) => {
    switch (id) {
      case 'stat-1':
        return <Gauge className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A9A2B]" />;
      case 'stat-2':
        return <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#E0147E]" />;
      case 'stat-3':
        return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A9A2B]" />;
      case 'stat-4':
        return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#E0147E]" />;
      default:
        return <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A9A2B]" />;
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-12 sm:py-20 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Decorative Scrapbook Sticky Note */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <span className="font-pixel text-[10px] sm:text-xs text-[#E0147E] bg-[#D9C7A0] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-[#1E1B18] shadow-retro-sm">
          // SECTION 01
        </span>
        <span className="font-hand text-lg sm:text-2xl text-[#5A0B16] font-bold truncate">
          get to know me a little better &hearts;
        </span>
      </div>

      {/* Main Retro Window Wrapping the Section */}
      <RetroWindow
        title="about_himani.exe - Notepad &amp; Stats"
        icon="🌸"
        showToolbar={true}
        initialRotation={-0.3}
      >
        <div className="about-bento-grid grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-6 w-full">
          {/* Bento Card 1: Social Profile Dashboard Header */}
          <div className="about-bento-card md:col-span-12 p-4 sm:p-6 lg:p-7 rounded-2xl bg-[#D9C7A0]/50 border-2 border-[#1E1B18] shadow-retro-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden w-full">
            <div className="washi-tape washi-tape-gingham -top-2 right-6 sm:right-12 w-24 sm:w-28 rotate-2" />

            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-[#1E1B18] overflow-hidden bg-[#FBF8EF] shadow-retro-sm shrink-0">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-grow">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="font-serif font-black text-xl sm:text-3xl text-[#5A0B16] truncate">
                    {personalInfo.name}
                  </h3>
                  <span className="px-1.5 py-0.5 rounded bg-[#8A9A2B] text-white font-pixel text-[8px] sm:text-[9px] border border-[#1E1B18]">
                    PRO
                  </span>
                </div>
                <p className="font-mono text-[11px] sm:text-sm text-[#1E1B18] font-semibold truncate">
                  Software Engineer &bull; Hyderabad, India
                </p>
                <p className="font-hand text-sm sm:text-base text-[#E0147E] font-bold truncate">
                  &ldquo;Building software with clean architecture&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#1E1B18] w-full sm:w-auto justify-end">
              <div className="flex-1 sm:flex-initial px-2.5 py-1.5 rounded-xl bg-[#FBF8EF] border border-[#1E1B18] shadow-retro-sm text-center">
                <span className="font-pixel text-[11px] sm:text-xs text-[#E0147E] block font-bold">4+</span>
                <span className="text-[9px] uppercase text-[#1E1B18]/70">Key Metrics</span>
              </div>
              <div className="flex-1 sm:flex-initial px-2.5 py-1.5 rounded-xl bg-[#FBF8EF] border border-[#1E1B18] shadow-retro-sm text-center">
                <span className="font-pixel text-[11px] sm:text-xs text-[#8A9A2B] block font-bold">100%</span>
                <span className="text-[9px] uppercase text-[#1E1B18]/70">Full Stack</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Narrative Bio */}
          <div className="about-bento-card md:col-span-7 p-4 sm:p-6 lg:p-7 rounded-2xl bg-[#FBF8EF] border-2 border-[#1E1B18] shadow-retro-sm relative w-full">
            <span className="font-pixel text-[9px] sm:text-[10px] text-[#8A9A2B] font-bold uppercase tracking-wider block mb-2 sm:mb-3">
              [SYSTEM_BIO.TXT]
            </span>
            <h4 className="font-serif font-bold text-lg sm:text-2xl text-[#5A0B16] mb-3 sm:mb-4 leading-snug">
              Driven by curiosity, engineered for real impact.
            </h4>
            <div className="space-y-3 font-mono text-xs sm:text-sm text-[#1E1B18] leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t-2 border-dashed border-[#1E1B18]/20 flex items-center justify-between font-hand text-base sm:text-lg text-[#E0147E] font-bold">
              <span>let's build together ✨</span>
              <span className="text-xs font-mono text-[#8A9A2B]">-- Himani Patel</span>
            </div>
          </div>

          {/* Bento Card 3: Stack Specialization Card */}
          <div className="about-bento-card md:col-span-5 p-4 sm:p-6 rounded-2xl bg-[#D9C7A0]/60 border-2 border-[#1E1B18] shadow-retro-sm flex flex-col justify-between w-full">
            <div>
              <span className="font-pixel text-[9px] sm:text-[10px] text-[#5A0B16] font-bold uppercase tracking-wider block mb-2">
                [CORE_SPECIALIZATIONS]
              </span>
              <h5 className="font-serif font-bold text-base sm:text-lg text-[#1E1B18] mb-2">
                Full-Stack &amp; IoT Focus
              </h5>
              <p className="font-mono text-xs text-[#1E1B18]/80 leading-relaxed mb-4">
                High-throughput backends (.NET Core, Node.js, SQL Server, MongoDB) combined with responsive, animated frontends (React.js &amp; GSAP).
              </p>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#FBF8EF] border border-[#1E1B18] flex items-center justify-between">
                  <span>Backend Engineering</span>
                  <span className="text-[#8A9A2B] font-bold">.NET &amp; Node</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#FBF8EF] border border-[#1E1B18] flex items-center justify-between">
                  <span>Frontend Dynamics</span>
                  <span className="text-[#E0147E] font-bold">React &amp; GSAP</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#FBF8EF] border border-[#1E1B18] flex items-center justify-between">
                  <span>IoT Systems</span>
                  <span className="text-[#5A0B16] font-bold">Sensor Data</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1E1B18]/20 text-[10px] sm:text-[11px] font-mono text-[#8A9A2B] font-bold">
              &bull; Agile Certified Leadership Mindset
            </div>
          </div>

          {/* Bento Cards 4-7: 4 Key Stats */}
          {keyStats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`about-bento-card md:col-span-3 p-4 sm:p-5 rounded-2xl border-2 border-[#1E1B18] shadow-retro-sm transition-transform duration-200 hover:-translate-y-0.5 w-full ${
                idx % 2 === 0 ? 'bg-[#FBF8EF]' : 'bg-[#D9C7A0]/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#E9E7CB] border border-[#1E1B18] flex items-center justify-center">
                  {getStatIcon(stat.id)}
                </div>
                <span className="font-pixel text-[8px] sm:text-[9px] uppercase px-2 py-0.5 rounded bg-[#E0147E] text-white border border-[#1E1B18]">
                  {stat.suffix}
                </span>
              </div>

              <div className="font-serif font-black text-2xl sm:text-4xl text-[#5A0B16] mb-1">
                {stat.value}
              </div>

              <h6 className="font-pixel text-[10px] sm:text-[11px] text-[#1E1B18] uppercase tracking-tight mb-1 font-bold">
                {stat.label}
              </h6>

              <p className="font-mono text-[10px] sm:text-[11px] text-[#1E1B18]/70 leading-normal">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </RetroWindow>
    </section>
  );
}
