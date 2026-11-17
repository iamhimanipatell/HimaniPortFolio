import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Sparkles, Figma, ArrowUpRight, Radio, Music } from 'lucide-react';
import RetroWindow from './RetroWindow';
import { projectsData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'UI/UX'];

// 8 Theme Color Swatches for decorative Paint Palette Strip
const THEME_SWATCHES = [
  { color: '#E9E7CB', name: 'Sand' },
  { color: '#D9C7A0', name: 'Warm Beige' },
  { color: '#A08C6E', name: 'Taupe' },
  { color: '#8A9A2B', name: 'Olive' },
  { color: '#F06EAF', name: 'Bubblegum' },
  { color: '#E0147E', name: 'Magenta' },
  { color: '#5A0B16', name: 'Burgundy' },
  { color: '#7DF3FF', name: 'Cyan Glow' },
];

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
      gsap.from('.project-item-card', {
        scrollTrigger: {
          trigger: '.projects-scrapbook-grid',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Decorative Scrapbook Sticky Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-pixel text-xs text-[#E0147E] bg-[#D9C7A0] px-3 py-1 rounded-full border-2 border-[#1E1B18] shadow-retro-sm">
          // SECTION 02
        </span>
        <span className="font-hand text-2xl text-[#5A0B16] font-bold">
          polaroids &amp; projects from my desk 🌸
        </span>
      </div>

      <RetroWindow
        title="projects_showcase.exe - Paint"
        icon="🎨"
        showToolbar={true}
        initialRotation={0.4}
      >
        {/* Top Bar: Title & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[#1E1B18]/15 mb-6">
          <div>
            <h3 className="font-serif font-black text-2xl sm:text-4xl text-[#5A0B16]">
              Featured Applications &amp; Works
            </h3>
            <p className="font-mono text-xs text-[#1E1B18]/70 mt-1">
              Real-world full-stack architectures, interactive frontends &amp; design prototypes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1 bg-[#D9C7A0]/70 rounded-full border-2 border-[#1E1B18] shadow-retro-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-pixel text-[11px] transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#E0147E] text-white font-bold shadow-[2px_2px_0px_#1E1B18]'
                    : 'text-[#1E1B18] hover:bg-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8-Color Paint Palette Swatch Strip */}
        <div className="flex items-center gap-2 mb-8 p-2.5 rounded-xl bg-[#D9C7A0]/40 border-2 border-[#1E1B18] shadow-retro-sm overflow-x-auto">
          <span className="font-pixel text-[9px] text-[#5A0B16] uppercase font-bold shrink-0">
            PALETTE STRIP:
          </span>
          <div className="flex items-center gap-1.5 shrink-0">
            {THEME_SWATCHES.map((swatch) => (
              <div
                key={swatch.name}
                className="w-5 h-5 rounded border border-[#1E1B18] shadow-sm relative group cursor-pointer"
                style={{ backgroundColor: swatch.color }}
                title={`${swatch.name} (${swatch.color})`}
              />
            ))}
          </div>
          <span className="font-hand text-sm text-[#8A9A2B] ml-auto shrink-0 hidden sm:inline">
            Y2K retro scrapbook color system &bull; 8 custom tones
          </span>
        </div>

        {/* Projects Grid */}
        <div className="projects-scrapbook-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const isGlassCard = index === 1; // Variant: Stitch Noor as frosted HUD card
            const rotation = index % 2 === 0 ? '-1.5deg' : '1.5deg';

            if (isGlassCard) {
              // --- GLASS HUD CARD VARIANT (With Cyan Glow & Thin HUD Brackets) ---
              return (
                <article
                  key={project.id}
                  className="project-item-card retro-glass-card rounded-3xl p-6 sm:p-7 relative flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01]"
                  style={{ transform: `rotate(${rotation})` }}
                >
                  {/* Thin HUD corner brackets */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#7DF3FF]" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#7DF3FF]" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#7DF3FF]" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#7DF3FF]" />

                  {/* "Now Playing" Retro Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E1B18]/15">
                    <div className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-[#E0147E] animate-pulse" />
                      <span className="font-pixel text-[10px] text-[#5A0B16] font-bold">
                        NOW SHOWCASING &bull; MERN APP
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-[#E0147E] text-white font-pixel text-[9px] border border-[#1E1B18]">
                      FEATURED
                    </span>
                  </div>

                  {/* Image Preview */}
                  <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border-2 border-[#1E1B18] bg-black/20 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#FBF8EF]/90 border border-[#1E1B18] font-mono text-[10px] text-[#5A0B16] font-bold">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-grow">
                    <h4 className="font-serif font-black text-2xl text-[#5A0B16] mb-1">
                      {project.title}
                    </h4>
                    <p className="font-mono text-xs text-[#E0147E] font-semibold mb-2">
                      {project.tagline}
                    </p>
                    <p className="font-mono text-xs text-[#1E1B18]/85 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#FBF8EF] border border-[#1E1B18] font-mono text-[10px] text-[#1E1B18]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 border-t-2 border-dashed border-[#1E1B18]/15 flex items-center justify-between gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E9E7CB] text-[#1E1B18] font-mono text-xs font-bold border-2 border-[#1E1B18] shadow-retro-sm hover:bg-white active:translate-x-0.5 active:translate-y-0.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#E0147E] text-white font-pixel text-xs border-2 border-[#1E1B18] shadow-retro hover:bg-[#F06EAF] active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              );
            }

            // --- POLAROID SCRAPBOOK STYLE VARIANT ---
            return (
              <article
                key={project.id}
                className="project-item-card polaroid-card rounded-3xl p-5 sm:p-6 relative flex flex-col justify-between"
                style={{ transform: `rotate(${rotation})` }}
              >
                {/* Washi Tape on top */}
                <div className="washi-tape washi-tape-gingham -top-3 left-1/2 -translate-x-1/2 w-32 -rotate-1" />

                {/* Hand-drawn SVG doodle arrow on featured card */}
                {project.featured && (
                  <div className="hidden sm:flex items-center gap-1.5 absolute -top-8 -right-8 z-30 select-none">
                    <span className="font-hand text-base text-[#E0147E] font-bold rotate-12">
                      check live demo! ✨
                    </span>
                    <svg width="35" height="30" viewBox="0 0 35 30" fill="none" className="rotate-45">
                      <path d="M5 20C12 5 22 8 30 15M30 15L24 8M30 15L22 18" stroke="#E0147E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                )}

                {/* Image Container with Polaroid photo border */}
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#1E1B18] bg-[#D9C7A0] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />

                  {project.featured && (
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-[#F06EAF] text-white font-pixel text-[9px] border border-[#1E1B18] shadow-sm">
                      FEATURED
                    </span>
                  )}

                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#FBF8EF]/90 border border-[#1E1B18] font-mono text-[10px] text-[#5A0B16] font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Polaroid Body */}
                <div className="flex-grow">
                  <h4 className="font-serif font-black text-2xl text-[#5A0B16] mb-1">
                    {project.title}
                  </h4>
                  <p className="font-mono text-xs text-[#8A9A2B] font-bold mb-2">
                    {project.tagline}
                  </p>
                  <p className="font-mono text-xs text-[#1E1B18]/85 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#E9E7CB] border border-[#1E1B18] font-mono text-[10px] text-[#1E1B18]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pill Action Buttons (Hot Pink / Magenta) */}
                <div className="pt-4 border-t-2 border-dashed border-[#1E1B18]/15 flex items-center justify-between gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#E9E7CB] text-[#1E1B18] font-mono text-xs font-bold border-2 border-[#1E1B18] shadow-retro-sm hover:bg-white active:translate-x-0.5 active:translate-y-0.5 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="font-hand text-base text-[#1E1B18]/60">
                      Figma UI/UX specs
                    </span>
                  )}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#E0147E] text-white font-pixel text-xs border-2 border-[#1E1B18] shadow-retro hover:bg-[#F06EAF] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                  >
                    <span>{project.isFigma ? 'View Figma' : 'Live Demo'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </RetroWindow>
    </section>
  );
}
