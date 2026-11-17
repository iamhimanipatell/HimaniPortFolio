import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
  Figma,
  ChevronLeft,
  ChevronRight,
  Layers,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'UI/UX'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  // Filter projects for the grid
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  // Spotlight featured projects
  const featuredProjects = projectsData.filter((p) => p.featured);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from('.projects-header', {
        scrollTrigger: {
          trigger: '.projects-header',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Spotlight banner reveal
      gsap.from('.spotlight-container', {
        scrollTrigger: {
          trigger: '.spotlight-container',
          start: 'top 80%',
        },
        y: 45,
        opacity: 0,
        scale: 0.98,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Filter tabs reveal
      gsap.from('.projects-filters', {
        scrollTrigger: {
          trigger: '.projects-filters',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Project cards stagger
      gsap.from('.project-card-container', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const nextSpotlight = () => {
    setSpotlightIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSpotlight = () => {
    setSpotlightIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const activeSpotlight = featuredProjects[spotlightIndex] || featuredProjects[0];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="projects-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f5a0] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
            <span>03 / SELECTED WORKS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Featured Engineering. <br />
            <span className="text-slate-400 font-semibold">Production Apps &amp; Interfaces.</span>
          </h2>
        </div>

        <p className="max-w-md text-sm text-slate-400 leading-relaxed">
          From full-stack distributed systems with .NET Core and SQL Server to responsive MERN e-commerce platforms and Figma design systems.
        </p>
      </div>

      {/* --- 1. HORIZONTAL SPOTLIGHT SHOWCASE (Award-Style Featured Presentation) --- */}
      <div className="spotlight-container relative mb-20 rounded-3xl bg-gradient-to-br from-[#0e111a] via-[#090b10] to-[#0d0f14] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl shadow-black/60 group">
        {/* Ambient neon radial backlight */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#00f5a0]/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-[#00f5a0]/15 transition duration-700" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#00d8f6]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Spotlight Navigation Bar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f5a0]/15 text-[#00f5a0] border border-[#00f5a0]/30 font-mono text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#00f5a0]" />
              FLAGSHIP SPOTLIGHT
            </span>
            <span className="hidden sm:inline font-mono text-xs text-slate-400">
              {String(spotlightIndex + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Interactive Prev/Next Controls */}
          <div className="flex items-center gap-2">
            <MagneticButton strength={0.3}>
              <button
                onClick={prevSpotlight}
                aria-label="Previous Featured Project"
                className="w-10 h-10 rounded-xl bg-surface-2 border border-white/10 hover:border-[#00f5a0]/50 hover:bg-surface-3 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <button
                onClick={nextSpotlight}
                aria-label="Next Featured Project"
                className="w-10 h-10 rounded-xl bg-surface-2 border border-white/10 hover:border-[#00f5a0]/50 hover:bg-surface-3 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Spotlight Card Body */}
        {activeSpotlight && (
          <div
            key={activeSpotlight.id}
            data-cursor-project="true"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Visual Preview Side */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-[#07080b] border border-white/10 group/img shadow-2xl">
                <img
                  src={activeSpotlight.image}
                  alt={activeSpotlight.title}
                  loading="lazy"
                  className="w-full h-[280px] sm:h-[380px] lg:h-[420px] object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/90 via-transparent to-transparent" />

                {/* Live app tag pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-slate-200 border border-white/10 font-mono text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse" />
                    Live Production Deployment
                  </span>
                </div>

                {/* Category tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-[#07080b]/80 backdrop-blur-md text-[#00d8f6] border border-[#00d8f6]/30 font-mono text-xs font-semibold">
                    {activeSpotlight.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Information & Actions Side */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <p className="font-mono text-xs text-[#00f5a0] uppercase tracking-wider mb-2">
                  {activeSpotlight.tagline}
                </p>

                <h3 className="font-display font-black text-3xl sm:text-4xl text-white mb-4 tracking-tight leading-tight">
                  {activeSpotlight.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6 font-normal">
                  {activeSpotlight.description}
                </p>

                {/* Key Architectural Highlights */}
                {activeSpotlight.highlights && (
                  <div className="space-y-2 mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Key Highlights &amp; Architecture:
                    </p>
                    {activeSpotlight.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00f5a0] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {activeSpotlight.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-[#141824] text-slate-200 font-mono text-xs border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                {activeSpotlight.liveUrl && (
                  <MagneticButton strength={0.3}>
                    <a
                      href={activeSpotlight.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00f5a0] text-[#07080b] font-display font-bold text-sm tracking-wide hover:bg-[#00df90] hover:shadow-[0_0_25px_rgba(0,245,160,0.45)] transition-all"
                    >
                      <span>Launch Live App</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </MagneticButton>
                )}

                {activeSpotlight.githubUrl && (
                  <MagneticButton strength={0.25}>
                    <a
                      href={activeSpotlight.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-2 text-white font-mono text-xs font-semibold border border-white/10 hover:border-white/30 hover:bg-surface-3 transition-all"
                    >
                      <Github className="w-4 h-4 text-slate-300" />
                      <span>View GitHub Code</span>
                    </a>
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- 2. COMPLETE WORKS ARCHIVE & CATEGORY FILTER --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pt-8 border-t border-white/10">
        <div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            All Projects &amp; Interfaces
          </h3>
          <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
            Complete archive of web solutions, e-commerce, and high-fidelity UX prototypes.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="projects-filters flex flex-wrap gap-2 p-1.5 rounded-2xl bg-surface-1/80 border border-white/5 backdrop-blur-md">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${activeCategory === cat
                ? 'bg-[#00f5a0] text-[#07080b] font-bold shadow-md shadow-[#00f5a0]/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project) => {
          return (
            <article
              key={project.id}
              data-cursor-project="true"
              className={`project-card-container group relative rounded-3xl bg-surface-1/85 border border-white/10 hover:border-[#00f5a0]/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl shadow-black/50 ${project.featured ? 'ring-1 ring-[#00f5a0]/30' : ''
                }`}
            >
              {/* Media Container with Image Preview */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#0a0c10] border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent opacity-60" />

                {/* Category Badge & Featured Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#07080b]/80 backdrop-blur-md text-slate-200 border border-white/10 font-mono text-[11px] font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00f5a0]/15 text-[#00f5a0] border border-[#00f5a0]/40 font-mono text-[11px] font-bold shadow-sm">
                      <Sparkles className="w-3 h-3 text-[#00f5a0]" />
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Live / Figma Indicator */}
                <div className="absolute top-4 right-4">
                  {project.isFigma ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono text-[11px]">
                      <Figma className="w-3 h-3 text-purple-400" />
                      Figma
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-slate-300 border border-white/10 font-mono text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse" />
                      Live App
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#00f5a0] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="font-mono text-xs text-[#00d8f6] font-medium mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-300/90 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  {project.highlights && (
                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-[#00f5a0] mt-0.5">&bull;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#131722] text-slate-300 font-mono text-[11px] border border-white/5 hover:border-[#00f5a0]/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (GitHub + Live Demo) */}
                <div className="pt-5 border-t border-white/5 flex items-center justify-between gap-3">
                  {/* GitHub Button */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-2 text-slate-200 text-xs font-mono font-medium border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-300" />
                      <span>Code Repository</span>
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500 italic">
                      Design Specification
                    </span>
                  )}

                  {/* Live Demo / Figma Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00f5a0] text-[#07080b] font-display font-bold text-xs tracking-wide hover:bg-[#00df90] hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all duration-200"
                  >
                    <span>{project.isFigma ? 'View Prototype' : 'Live Demo'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
