import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, Server, Layout, Database, Radio, Cloud, Users,
  Terminal, ShieldCheck, UploadCloud, Layers, Zap, Sliders, Smartphone,
  Palette, Boxes, Search, Table, Activity, Wifi, Cpu, GitBranch,
  CloudLightning, CloudRain, Gauge, Binary, Figma, CheckCircle2, FileCode, FileCode2
} from 'lucide-react';
import { skillsData, marqueeSkills } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const getSkillIcon = (iconName) => {
  const map = {
    Code2, Server, Layout, Database, Radio, Cloud, Users,
    Terminal, ShieldCheck, UploadCloud, Layers, Zap, Sliders, Smartphone,
    Palette, Boxes, Search, Table, Activity, Wifi, Cpu, GitBranch,
    CloudLightning, CloudRain, Gauge, Binary, Figma, CheckCircle2, FileCode, FileCode2
  };
  const Comp = map[iconName] || Code2;
  return <Comp className="w-4 h-4 text-[#B08A4A]" />;
};

export default function Skills() {
  const categories = Object.keys(skillsData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.editorial-skill-item', {
        scrollTrigger: {
          trigger: '.skills-pills-grid',
          start: 'top 85%',
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.04,
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
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-3 shadow-sm">
          <span>EDITORIAL MEDIA KIT &bull; TOOLBOX &amp; STACK</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight">
            Technical Repertoire
          </h2>
          <span className="absolute -top-3 sm:-top-5 -right-6 sm:-right-12 font-script text-3xl sm:text-5xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            skills
          </span>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#2B1512]/75 max-w-lg mt-3">
          Categorized software tools, languages, and modern architectural practices.
        </p>
      </div>

      {/* Row of White Circular Tech-Logo Badges in Infinite Marquee Strip */}
      <div className="relative w-full overflow-hidden py-4 mb-12 rounded-3xl bg-[#FBF8EF] border border-[#3E1F1B]/15 shadow-sm">
        <div className="flex w-max animate-marquee space-x-4 sm:space-x-6">
          {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#3E1F1B]/15 shadow-sm text-[#3E1F1B] font-serif text-xs font-semibold whitespace-nowrap hover:scale-105 transition-transform"
            >
              <div className="w-5 h-5 rounded-full bg-[#F6F0DC] border border-[#B08A4A]/40 flex items-center justify-center text-[#B08A4A] text-[10px] font-bold">
                &bull;
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs: Brown Pill Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4 border-b border-[#3E1F1B]/15">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-serif text-xs transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#3E1F1B] text-[#FBF8EF] font-bold shadow-md scale-105'
                : 'bg-[#FBF8EF] text-[#3E1F1B] border border-[#3E1F1B]/20 hover:bg-[#F6F0DC]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid: Styled as Editorial Cards */}
      <div className="skills-pills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
        {skillsData[selectedCategory]?.map((skill) => (
          <div
            key={skill.name}
            className="editorial-skill-item p-4 sm:p-5 rounded-2xl bg-[#FBF8EF] border border-[#3E1F1B]/15 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#F6F0DC] border border-[#3E1F1B]/15 flex items-center justify-center">
                {getSkillIcon(skill.icon)}
              </div>
              <span className="font-mono text-xs text-[#B08A4A] font-bold">
                {skill.level}%
              </span>
            </div>

            <div>
              <h4 className="font-serif font-bold text-base text-[#3E1F1B] mb-2">
                {skill.name}
              </h4>

              {/* Progress Level Bar */}
              <div className="w-full h-1.5 bg-[#F6F0DC] rounded-full overflow-hidden border border-[#3E1F1B]/10">
                <div
                  className="h-full bg-gradient-to-r from-[#B08A4A] to-[#3E1F1B] rounded-full transition-all duration-700 ease-out"
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
