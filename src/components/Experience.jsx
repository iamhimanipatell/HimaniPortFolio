import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineLineRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.exp-header', {
        scrollTrigger: {
          trigger: '.exp-header',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate vertical timeline progress line
      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.timeline-container',
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: 0.5,
            },
          }
        );
      }

      // Animate individual timeline items
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
          x: index % 2 === 0 ? -40 : 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="exp-header flex flex-col items-start mb-20">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f5a0] tracking-widest uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
          <span>02 / WORK HISTORY</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          Professional Journey. <br />
          <span className="text-slate-400 font-semibold">Roles, Milestones &amp; Leadership.</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="timeline-container relative max-w-4xl mx-auto">
        {/* Animated Central Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2">
          <div
            ref={timelineLineRef}
            className="w-full h-full bg-gradient-to-b from-[#00f5a0] via-[#00d8f6] to-[#00f5a0] origin-top"
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16">
          {experienceData.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className="timeline-item relative flex flex-col sm:flex-row items-start sm:items-center w-full"
              >
                {/* Milestone Node on Line */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="relative w-8 h-8 rounded-full bg-[#07080b] border-2 border-[#00f5a0] flex items-center justify-center shadow-lg shadow-[#00f5a0]/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00f5a0] animate-pulse" />
                  </div>
                </div>

                {/* Content Card Layout */}
                <div
                  className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto text-left'
                  }`}
                >
                  <div className="group relative p-6 sm:p-7 rounded-2xl bg-surface-1/90 border border-white/5 hover:border-[#00f5a0]/30 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40">
                    {/* Role & Company Header */}
                    <div className="flex flex-col gap-1 mb-3">
                      <div className={`flex items-center gap-2 flex-wrap ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        {item.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#00f5a0]/15 text-[#00f5a0] font-mono text-[11px] font-semibold border border-[#00f5a0]/30">
                            Present Role
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 font-mono text-[11px] border border-white/5">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#00f5a0] transition-colors">
                        {item.role}
                      </h3>

                      <div className={`flex items-center gap-2 text-sm text-slate-300 font-medium ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        <span className="text-[#00f5a0] font-semibold">{item.company}</span>
                        <span>&bull;</span>
                        <span className="inline-flex items-center gap-1 text-slate-400 text-xs font-mono">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {item.location}
                        </span>
                      </div>

                      <div className={`inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 mt-0.5 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        <Calendar className="w-3.5 h-3.5 text-[#00d8f6]" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-300/90 leading-relaxed mb-4 text-left">
                      {item.summary}
                    </p>

                    {/* Key Accomplishments Checklist */}
                    {item.responsibilities && (
                      <ul className="space-y-2 mb-5 text-left border-t border-white/5 pt-3">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-400">
                            <ChevronRight className="w-4 h-4 text-[#00f5a0] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Tags */}
                    <div className={`flex flex-wrap gap-1.5 pt-2 border-t border-white/5 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 font-mono text-[11px] border border-white/5 hover:border-[#00f5a0]/40 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
