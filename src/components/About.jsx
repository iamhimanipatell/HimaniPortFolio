import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Zap, Users, Gauge, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';
import { personalInfo, keyStats } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from('.about-heading', {
        scrollTrigger: {
          trigger: '.about-heading',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Bio text reveal
      gsap.from('.about-bio', {
        scrollTrigger: {
          trigger: '.about-bio',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Photo card reveal
      gsap.from('.about-photo-wrapper', {
        scrollTrigger: {
          trigger: '.about-photo-wrapper',
          start: 'top 80%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Key stats stagger reveal
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getStatIcon = (id) => {
    switch (id) {
      case 'stat-1':
        return <Gauge className="w-5 h-5 text-[#00f5a0]" />;
      case 'stat-2':
        return <Zap className="w-5 h-5 text-[#00d8f6]" />;
      case 'stat-3':
        return <Users className="w-5 h-5 text-[#00f5a0]" />;
      case 'stat-4':
        return <Award className="w-5 h-5 text-[#00d8f6]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#00f5a0]" />;
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f5a0] tracking-widest uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
          <span>01 / ABOUT ME</span>
        </div>
        <h2 className="about-heading font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          Engineered for Performance. <br />
          <span className="text-slate-400 font-semibold">Driven by Real-World Impact.</span>
        </h2>
      </div>

      {/* Main Grid: Bio + Portrait */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
        {/* Left Column: Portrait & Highlights */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="about-photo-wrapper relative w-full max-w-sm group">
            {/* Ambient neon backplate */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00f5a0]/40 via-[#00d8f6]/30 to-purple-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700" />

            {/* Inner Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0d0f14] border border-white/10 shadow-2xl">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                loading="lazy"
                className="w-full h-[400px] object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent opacity-80" />

              {/* Overlay card footer */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0e1118]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-sm text-white">{personalInfo.name}</p>
                  <p className="font-mono text-[11px] text-[#00f5a0]">Software Engineer</p>
                </div>
                <div className="px-2 py-1 rounded bg-[#00f5a0]/15 text-[#00f5a0] font-mono text-[10px] font-semibold border border-[#00f5a0]/30">
                  HYDERABAD
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative */}
        <div className="about-bio lg:col-span-7 flex flex-col gap-6">
          <div className="space-y-5 text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
            <div className="p-4 rounded-xl bg-surface-1/60 border border-white/5">
              <span className="font-mono text-xs text-[#00f5a0] font-semibold block mb-1">
                STACK SPECIALIZATION
              </span>
              <p className="text-sm text-slate-300">
                .NET Core, Node.js, React.js, SQL Server, MongoDB, EF Core, GSAP
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-1/60 border border-white/5">
              <span className="font-mono text-xs text-[#00d8f6] font-semibold block mb-1">
                DOMAIN FOCUS
              </span>
              <p className="text-sm text-slate-300">
                IoT Monitoring Platforms, E-Commerce Architectures, Real-Time Dashboards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Stats Grid */}
      <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyStats.map((stat) => (
          <div
            key={stat.id}
            className="stat-card group relative p-6 sm:p-7 rounded-2xl bg-surface-1/80 border border-white/5 hover:border-[#00f5a0]/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40"
          >
            {/* Top Bar with Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#141722] border border-white/10 flex items-center justify-center group-hover:border-[#00f5a0]/40 transition-colors">
                {getStatIcon(stat.id)}
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 group-hover:text-[#00f5a0] transition-colors">
                {stat.suffix}
              </span>
            </div>

            {/* Big Stat Value */}
            <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-2 group-hover:text-[#00f5a0] transition-colors">
              {stat.value}
            </div>

            {/* Stat Title */}
            <h3 className="font-display font-bold text-sm sm:text-base text-slate-200 mb-1.5">
              {stat.label}
            </h3>

            {/* Stat Description */}
            <p className="text-xs text-slate-400 leading-normal">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
