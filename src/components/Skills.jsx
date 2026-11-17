import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, Server, Layout, Database, Radio, Cloud, Users, Sparkles,
  Terminal, ShieldCheck, UploadCloud, Layers, Zap, Sliders, Smartphone,
  Palette, Boxes, Search, Table, Activity, Wifi, Cpu, GitBranch,
  CloudLightning, CloudRain, Gauge, Binary, Figma, CheckCircle2, FileCode, FileCode2
} from 'lucide-react';
import RetroWindow from './RetroWindow';
import { skillsData, marqueeSkills } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

// Dynamic icon resolver
const getSkillIcon = (iconName) => {
  const map = {
    Code2, Server, Layout, Database, Radio, Cloud, Users, Sparkles,
    Terminal, ShieldCheck, UploadCloud, Layers, Zap, Sliders, Smartphone,
    Palette, Boxes, Search, Table, Activity, Wifi, Cpu, GitBranch,
    CloudLightning, CloudRain, Gauge, Binary, Figma, CheckCircle2, FileCode, FileCode2
  };
  const Comp = map[iconName] || Code2;
  return <Comp className="w-4 h-4 text-[#E0147E]" />;
};

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.skill-chip-item', {
        scrollTrigger: {
          trigger: '.skills-chips-grid',
          start: 'top 85%',
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'back.out(1.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Decorative Scrapbook Sticky Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-pixel text-xs text-[#E0147E] bg-[#D9C7A0] px-3 py-1 rounded-full border-2 border-[#1E1B18] shadow-retro-sm">
          // SECTION 03
        </span>
        <span className="font-hand text-2xl text-[#5A0B16] font-bold">
          my digital toolbox &amp; color palette ✨
        </span>
      </div>

      <RetroWindow
        title="skills_toolbox.dll - MS Paint Toolkit"
        icon="🧰"
        showToolbar={true}
        initialRotation={-0.3}
      >
        {/* Infinite Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-3 mb-8 rounded-xl bg-[#E9E7CB] border-2 border-[#1E1B18] shadow-retro-sm">
          <div className="flex w-max animate-marquee space-x-4">
            {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FBF8EF] border border-[#1E1B18] text-[#1E1B18] font-mono text-xs whitespace-nowrap shadow-[1px_1px_0px_#1E1B18]"
              >
                <span className="text-[#E0147E] text-xs">★</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs (Retro Toolbar Selector) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b-2 border-[#1E1B18]/15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl font-pixel text-xs transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#8A9A2B] text-white font-bold border-2 border-[#1E1B18] shadow-[2px_2px_0px_#1E1B18] translate-y-0.5'
                  : 'bg-[#D9C7A0]/70 text-[#1E1B18] border border-[#1E1B18] hover:bg-white shadow-[1px_1px_0px_#1E1B18]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Selected Category Skill Chips / Equalizer Grid */}
        <div className="skills-chips-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillsData[selectedCategory]?.map((skill) => (
            <div
              key={skill.name}
              className="skill-chip-item p-4 rounded-2xl bg-[#FBF8EF] border-2 border-[#1E1B18] shadow-retro-sm hover:shadow-retro hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#E9E7CB] border border-[#1E1B18] flex items-center justify-center shadow-inner">
                  {getSkillIcon(skill.icon)}
                </div>
                <span className="font-pixel text-[11px] text-[#E0147E] font-bold">
                  {skill.level}%
                </span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-base text-[#5A0B16] mb-2">
                  {skill.name}
                </h4>

                {/* Retro Segmented Equalizer / Progress Bar */}
                <div className="w-full h-3 bg-[#E9E7CB] border border-[#1E1B18] rounded-sm p-0.5 flex gap-0.5 overflow-hidden">
                  {Array.from({ length: 10 }).map((_, barIdx) => {
                    const isFilled = barIdx < Math.round(skill.level / 10);
                    return (
                      <div
                        key={barIdx}
                        className={`flex-1 rounded-xs transition-colors duration-300 ${
                          isFilled
                            ? barIdx >= 8
                              ? 'bg-[#E0147E]'
                              : 'bg-[#8A9A2B]'
                            : 'bg-transparent'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </RetroWindow>
    </section>
  );
}
