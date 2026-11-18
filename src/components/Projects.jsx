import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'UI/UX'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.editorial-project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 25,
        opacity: 0,
        stagger: 0.1,
        duration: 0.65,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-12 sm:py-16 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Compact Section Header */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-2 shadow-xs">
          <FolderGit2 className="w-3.5 h-3.5 text-[#3E1F1B]" />
          <span>EDITORIAL MEDIA KIT &bull; CASE STUDIES</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-2xl sm:text-4xl lg:text-5xl text-[#3E1F1B] tracking-tight">
            Selected Works
          </h2>
          <span className="absolute -top-3 -right-6 sm:-right-10 font-script text-2xl sm:text-4xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            portfolio
          </span>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#2B1512]/75 max-w-md mt-1.5">
          Curated full-stack applications, interactive MERN &amp; .NET systems, and Figma UI prototypes.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-5 p-1 rounded-full bg-[#FBF8EF] border border-[#3E1F1B]/20 shadow-xs max-w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1 rounded-full font-serif text-xs transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#3E1F1B] text-[#FBF8EF] font-bold shadow-sm'
                  : 'text-[#3E1F1B]/80 hover:bg-[#F6F0DC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Space-Efficient 2-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 w-full">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            className="editorial-project-card hover-tilt rounded-2xl bg-[#FBF8EF] border-2 border-[#3E1F1B] p-4 sm:p-5 shadow-badge flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
          >
            {/* Washi Tape Corner Accent */}
            <div className="washi-tape-strip washi-pink-gingham -top-2.5 right-6 w-24 rotate-1 pointer-events-none" />

            <div>
              {/* Browser Mockup Frame (Compact height) */}
              <div className="browser-mockup p-2 bg-white border border-[#3E1F1B]/15 shadow-sm rounded-xl mb-4 relative">
                {/* Browser Top Controls */}
                <div className="flex items-center justify-between px-1.5 pb-1.5 mb-1.5 border-b border-[#3E1F1B]/10">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#F7C8DA] border border-[#3E1F1B]/30" />
                    <div className="w-2 h-2 rounded-full bg-[#E3DAA0] border border-[#3E1F1B]/30" />
                    <div className="w-2 h-2 rounded-full bg-[#B08A4A]/60 border border-[#3E1F1B]/30" />
                  </div>
                  <span className="font-mono text-[9px] text-[#3E1F1B]/60 truncate max-w-[180px]">
                    {project.liveUrl.replace('https://', '')}
                  </span>
                  <div className="w-2" />
                </div>

                {/* Screenshot Frame */}
                <div className="relative w-full h-44 sm:h-48 rounded-lg overflow-hidden bg-[#F6F0DC] border border-[#3E1F1B]/15">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {project.featured && (
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#3E1F1B] text-[#F7C8DA] font-serif text-[9px] uppercase tracking-wider font-bold border border-[#B08A4A] shadow-sm">
                      FEATURED
                    </span>
                  )}

                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/95 text-[#3E1F1B] font-mono text-[9px] font-bold border border-[#3E1F1B]/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title & Script Tagline */}
              <div className="mb-2">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-serif text-[10px] uppercase tracking-widest text-[#B08A4A] font-bold">
                    CASE STUDY // 0{index + 1}
                  </span>
                </div>
                <h3 className="font-serif font-black text-xl sm:text-2xl text-[#3E1F1B] tracking-tight leading-snug">
                  {project.title}
                </h3>
                <span className="font-script text-sm text-[#B08A4A] block">
                  {project.tagline}
                </span>
              </div>

              {/* Concise Description */}
              <p className="font-mono text-xs text-[#2B1512]/80 leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>

              {/* Compact Tech Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full bg-[#E3DAA0] text-[#3E1F1B] font-mono text-[10px] font-semibold border border-[#3E1F1B]/15"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#F6F0DC] text-[#3E1F1B]/70 font-mono text-[10px]">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-2 pt-3 border-t border-[#3E1F1B]/15">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6F0DC] text-[#3E1F1B] font-serif text-xs font-bold border border-[#3E1F1B]/20 hover:bg-white active:scale-95 transition-all shadow-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              ) : (
                <span className="font-script text-xs text-[#B08A4A] font-bold">
                  Figma Design System
                </span>
              )}

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3E1F1B] text-[#F6F0DC] font-serif text-xs font-bold uppercase tracking-wider border border-[#B08A4A] hover:bg-[#4A2722] active:scale-95 transition-all shadow-xs"
              >
                <span>{project.isFigma ? 'View Prototype' : 'Live Demo'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F7C8DA]" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
