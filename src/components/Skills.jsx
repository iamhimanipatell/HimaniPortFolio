import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2, Server, Layout, Database, Radio, Cloud, Users, Sparkles,
  Terminal, ShieldCheck, UploadCloud, Layers, Zap, Sliders, Smartphone,
  Palette, Boxes, Search, Table, Activity, Wifi, Cpu, GitBranch,
  CloudLightning, CloudRain, Gauge, Binary, Figma, CheckCircle2, FileCode, FileCode2
} from 'lucide-react';
import { skillsData, marqueeSkills } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

// Helper to resolve icon components dynamically
const getSkillIcon = (iconName) => {
  const iconMap = {
    Code2: Code2,
    Server: Server,
    Layout: Layout,
    Database: Database,
    Radio: Radio,
    Cloud: Cloud,
    Users: Users,
    Sparkles: Sparkles,
    Terminal: Terminal,
    ShieldCheck: ShieldCheck,
    UploadCloud: UploadCloud,
    Layers: Layers,
    Zap: Zap,
    Sliders: Sliders,
    Smartphone: Smartphone,
    Palette: Palette,
    Boxes: Boxes,
    Search: Search,
    Table: Table,
    Activity: Activity,
    Wifi: Wifi,
    Cpu: Cpu,
    GitBranch: GitBranch,
    CloudLightning: CloudLightning,
    CloudRain: CloudRain,
    Gauge: Gauge,
    Binary: Binary,
    Figma: Figma,
    CheckCircle2: CheckCircle2,
    FileCode: FileCode,
    FileCode2: FileCode2,
  };

  const IconComp = iconMap[iconName] || Code2;
  return <IconComp className="w-5 h-5 text-[#00f5a0]" />;
};

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.skills-header', {
        scrollTrigger: {
          trigger: '.skills-header',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.marquee-container', {
        scrollTrigger: {
          trigger: '.marquee-container',
          start: 'top 90%',
        },
        opacity: 0,
        scale: 0.98,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.skill-card-item', {
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="skills-header flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f5a0] tracking-widest uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
          <span>04 / CORE COMPETENCIES</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          Technical Arsenal. <br />
          <span className="text-slate-400 font-semibold">Specialized Tools &amp; Methodologies.</span>
        </h2>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="marquee-container relative w-full overflow-hidden py-4 mb-16 rounded-2xl bg-surface-1/60 border border-white/5 backdrop-blur-md">
        {/* Left & Right gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#07080b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#07080b] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee space-x-6">
          {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-300 font-mono text-xs sm:text-sm whitespace-nowrap hover:border-[#00f5a0]/40 hover:text-white transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f5a0]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
              selectedCategory === category
                ? 'bg-[#00f5a0] text-[#07080b] font-bold shadow-lg shadow-[#00f5a0]/30'
                : 'bg-surface-1/80 text-slate-400 hover:text-white hover:bg-surface-2 border border-white/5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid for Selected Category */}
      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {skillsData[selectedCategory]?.map((skill) => (
          <div
            key={skill.name}
            className="skill-card-item group p-5 rounded-2xl bg-surface-1/80 border border-white/5 hover:border-[#00f5a0]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#141722] border border-white/10 flex items-center justify-center group-hover:border-[#00f5a0]/40 group-hover:scale-105 transition-all">
                {getSkillIcon(skill.icon)}
              </div>
              <span className="font-mono text-xs text-[#00f5a0] font-semibold">
                {skill.level}%
              </span>
            </div>

            <div>
              <h3 className="font-display font-bold text-base text-white group-hover:text-[#00f5a0] transition-colors mb-2">
                {skill.name}
              </h3>

              {/* Progress Level Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00f5a0] to-[#00d8f6] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
