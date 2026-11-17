import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Folder, ChevronRight, CheckCircle2, FileText } from 'lucide-react';
import RetroWindow from './RetroWindow';
import { experienceData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineSvgRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Timeline scroll progress animation
      gsap.fromTo(
        '.timeline-draw-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.retro-timeline-wrapper',
            start: 'top 75%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        }
      );

      gsap.from('.retro-exp-card', {
        scrollTrigger: {
          trigger: '.retro-timeline-wrapper',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Decorative Scrapbook Sticky Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-pixel text-xs text-[#E0147E] bg-[#D9C7A0] px-3 py-1 rounded-full border-2 border-[#1E1B18] shadow-retro-sm">
          // SECTION 04
        </span>
        <span className="font-hand text-2xl text-[#5A0B16] font-bold">
          career logs &bull; leadership milestones 📂
        </span>
      </div>

      <RetroWindow
        title="career_timeline.log - File Explorer"
        icon="📁"
        showToolbar={true}
        initialRotation={0.3}
      >
        <div className="mb-8 pb-4 border-b-2 border-[#1E1B18]/15">
          <h3 className="font-serif font-black text-2xl sm:text-4xl text-[#5A0B16]">
            Work Experience &amp; Internships
          </h3>
          <p className="font-mono text-xs text-[#1E1B18]/70 mt-1">
            Tracking enterprise contributions, team leadership, and performance optimizations.
          </p>
        </div>

        {/* Timeline Explorer */}
        <div className="retro-timeline-wrapper relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Animated Retro SVG Central Line */}
          <div className="absolute left-2 sm:left-4 top-2 bottom-2 w-1 bg-[#D9C7A0] border-l-2 border-[#1E1B18]">
            <div className="timeline-draw-line w-full h-full bg-[#E0147E] origin-top" />
          </div>

          <div className="space-y-10 sm:space-y-12">
            {experienceData.map((item, idx) => {
              const rotation = idx % 2 === 0 ? '-1deg' : '1deg';

              return (
                <div key={item.id} className="relative">
                  {/* Milestone Folder Node */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-4 w-8 h-8 rounded-full bg-[#E9E7CB] border-2 border-[#1E1B18] shadow-retro-sm flex items-center justify-center z-20">
                    <span className="text-xs">📁</span>
                  </div>

                  {/* Card Styled as a Retro Folder Memo */}
                  <div
                    className="retro-exp-card p-6 sm:p-7 rounded-2xl bg-[#FBF8EF] border-2 border-[#1E1B18] shadow-retro-sm relative"
                    style={{ transform: `rotate(${rotation})` }}
                  >
                    {/* Washi tape strip */}
                    <div className="washi-tape washi-tape-olive -top-3 right-8 w-28 rotate-1" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#5A0B16]">
                            {item.role}
                          </h4>
                          {item.current && (
                            <span className="px-2 py-0.5 rounded bg-[#8A9A2B] text-white font-pixel text-[9px] border border-[#1E1B18]">
                              PRESENT
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 font-mono text-xs text-[#8A9A2B] font-bold">
                          <span>{item.company}</span>
                          <span>&bull;</span>
                          <span className="text-[#1E1B18]/70 inline-flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#E9E7CB] border border-[#1E1B18] font-mono text-xs font-semibold text-[#5A0B16] self-start sm:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-[#E0147E]" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <p className="font-mono text-xs sm:text-sm text-[#1E1B18]/90 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Highlights bullet checklist */}
                    {item.responsibilities && (
                      <ul className="space-y-1.5 mb-5 pt-3 border-t-2 border-dashed border-[#1E1B18]/15">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 font-mono text-xs text-[#1E1B18]/80">
                            <span className="text-[#E0147E] font-bold mt-0.5">&gt;</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1E1B18]/15">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-[#D9C7A0]/70 border border-[#1E1B18] font-mono text-[10px] text-[#1E1B18]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RetroWindow>
    </section>
  );
}
