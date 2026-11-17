import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowUpRight, Sparkles, Smartphone, Monitor } from 'lucide-react';
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
          trigger: '.projects-showcase-container',
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
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
          <span>EDITORIAL MEDIA KIT &bull; CASE STUDIES</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight">
            Selected Works
          </h2>
          <span className="absolute -top-3 sm:-top-5 -right-6 sm:-right-12 font-script text-3xl sm:text-5xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            portfolio
          </span>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#2B1512]/75 max-w-lg mt-3">
          Full-stack applications, interactive e-commerce platforms, and high-fidelity design specifications.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 p-1.5 rounded-full bg-[#FBF8EF] border border-[#3E1F1B]/20 shadow-sm max-w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-serif text-xs transition-all cursor-pointer ${
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

      {/* Projects Showcase Container */}
      <div className="projects-showcase-container space-y-12 sm:space-y-16 w-full">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.id}
              className="editorial-project-card rounded-3xl bg-[#FBF8EF] border-2 border-[#3E1F1B] p-5 sm:p-8 lg:p-10 shadow-badge grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden"
            >
              {/* Washi Tape Corner Accent */}
              <div className="washi-tape-strip washi-pink-gingham -top-2.5 right-8 w-28 rotate-2" />

              {/* Media Column: White Bezel Phone or Browser Mockup Frame */}
              <div
                className={`lg:col-span-6 w-full ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="browser-mockup p-2.5 sm:p-3 bg-white border border-[#3E1F1B]/15 shadow-mockup relative">
                  {/* Browser Header Bar */}
                  <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-[#3E1F1B]/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F7C8DA] border border-[#3E1F1B]/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#E3DAA0] border border-[#3E1F1B]/30" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#B08A4A]/60 border border-[#3E1F1B]/30" />
                    </div>
                    <div className="px-3 py-0.5 rounded-full bg-[#F6F0DC] border border-[#3E1F1B]/10 font-mono text-[9px] text-[#3E1F1B]/70 max-w-[200px] truncate">
                      {project.liveUrl.replace('https://', '')}
                    </div>
                    <div className="w-3" />
                  </div>

                  {/* Screenshot Image Frame */}
                  <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden bg-[#F6F0DC] border border-[#3E1F1B]/15">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Featured Sticker Pill */}
                    {project.featured && (
                      <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-[#3E1F1B] text-[#F7C8DA] font-serif text-[10px] uppercase tracking-wider font-bold border border-[#B08A4A] shadow-sm">
                        FEATURED
                      </span>
                    )}

                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/95 text-[#3E1F1B] font-mono text-[10px] font-bold border border-[#3E1F1B]/20">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Case-Study Text Column in Serif & Script */}
              <div
                className={`lg:col-span-6 flex flex-col justify-between w-full ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold">
                      CASE STUDY // 0{index + 1}
                    </span>
                    <span className="text-xs text-[#B08A4A]">✦</span>
                  </div>

                  {/* Title & Script Tag */}
                  <div className="relative mb-3">
                    <h3 className="font-serif font-black text-2xl sm:text-4xl text-[#3E1F1B] tracking-tight">
                      {project.title}
                    </h3>
                    <span className="font-script text-xl sm:text-2xl text-[#B08A4A] block mt-0.5">
                      {project.tagline}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-mono text-xs sm:text-sm text-[#2B1512]/85 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.highlights && (
                    <div className="p-4 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/15 mb-6 space-y-2">
                      <span className="font-serif text-[10px] uppercase tracking-wider text-[#B08A4A] font-bold block">
                        HIGHLIGHTS &amp; ARCHITECTURE:
                      </span>
                      {project.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 font-mono text-xs text-[#2B1512]/90">
                          <span className="text-[#B08A4A] text-xs mt-0.5">✦</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] font-mono text-[10px] sm:text-[11px] font-semibold border border-[#3E1F1B]/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pill Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#3E1F1B]/15 flex-wrap">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F0DC] text-[#3E1F1B] font-serif text-xs font-bold border border-[#3E1F1B]/30 hover:bg-white active:scale-95 transition-all shadow-sm"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>
                  ) : (
                    <span className="font-script text-base text-[#B08A4A] font-bold">
                      Interactive Figma Prototype
                    </span>
                  )}

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3E1F1B] text-[#F6F0DC] font-serif text-xs font-bold uppercase tracking-wider border border-[#B08A4A] hover:bg-[#4A2722] active:scale-95 transition-all shadow-sm"
                  >
                    <span>{project.isFigma ? 'View Prototype' : 'Live Demo'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F7C8DA]" />
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
