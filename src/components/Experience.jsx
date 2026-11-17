import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin } from 'lucide-react';
import RetroWindow from './RetroWindow';
import { experienceData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-12 sm:py-20 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Decorative Scrapbook Sticky Tag */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <span className="font-pixel text-[10px] sm:text-xs text-[#E0147E] bg-[#D9C7A0] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-[#1E1B18] shadow-retro-sm">
          // SECTION 04
        </span>
        <span className="font-hand text-lg sm:text-2xl text-[#5A0B16] font-bold truncate">
          career logs &bull; leadership milestones 📂
        </span>
      </div>

      <RetroWindow
        title="career_timeline.log - File Explorer"
        icon="📁"
        showToolbar={true}
        initialRotation={0.2}
      >
        <div className="mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-2 border-[#1E1B18]/15 w-full">
          <h3 className="font-serif font-black text-xl sm:text-3xl lg:text-4xl text-[#5A0B16]">
            Work Experience &amp; Internships
          </h3>
          <p className="font-mono text-xs text-[#1E1B18]/70 mt-1">
            Tracking enterprise contributions, team leadership, and performance optimizations.
          </p>
        </div>

        {/* Timeline Explorer */}
        <div className="retro-timeline-wrapper relative max-w-4xl mx-auto pl-7 sm:pl-12 w-full">
          {/* Animated Retro SVG Central Line */}
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-1 bg-[#D9C7A0] border-l-2 border-[#1E1B18]">
            <div className="timeline-draw-line w-full h-full bg-[#E0147E] origin-top" />
          </div>

          <div className="space-y-8 sm:space-y-12 w-full">
            {experienceData.map((item, idx) => {
              const rotation = idx % 2 === 0 ? '-1deg' : '1deg';

              return (
                <div key={item.id} className="relative w-full">
                  {/* Milestone Folder Node */}
                  <div className="absolute -left-[31px] sm:-left-[41px] top-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E9E7CB] border-2 border-[#1E1B18] shadow-retro-sm flex items-center justify-center z-20">
                    <span className="text-[11px] sm:text-xs">📁</span>
                  </div>

                  {/* Card Styled as a Retro Folder Memo */}
                  <div
                    className="retro-exp-card p-4 sm:p-6 lg:p-7 rounded-2xl bg-[#FBF8EF] border-2 border-[#1E1B18] shadow-retro-sm relative w-full"
                    style={{
                      transform: isDesktop ? `rotate(${rotation})` : 'none',
                    }}
                  >
                    {/* Washi tape strip */}
                    <div className="washi-tape washi-tape-olive -top-3 right-6 sm:right-8 w-24 sm:w-28 rotate-1" />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h4 className="font-serif font-bold text-lg sm:text-2xl text-[#5A0B16]">
                            {item.role}
                          </h4>
                          {item.current && (
                            <span className="px-2 py-0.5 rounded bg-[#8A9A2B] text-white font-pixel text-[8px] sm:text-[9px] border border-[#1E1B18]">
                              PRESENT
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 font-mono text-xs text-[#8A9A2B] font-bold">
                          <span>{item.company}</span>
                          <span>&bull;</span>
                          <span className="text-[#1E1B18]/70 inline-flex items-center gap-1 text-[11px]">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E9E7CB] border border-[#1E1B18] font-mono text-[11px] sm:text-xs font-semibold text-[#5A0B16] self-start sm:self-auto">
                        <Calendar className="w-3 h-3 text-[#E0147E]" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <p className="font-mono text-xs sm:text-sm text-[#1E1B18]/90 leading-relaxed mb-3 sm:mb-4">
                      {item.summary}
                    </p>

                    {/* Highlights bullet checklist */}
                    {item.responsibilities && (
                      <ul className="space-y-1.5 mb-4 pt-3 border-t-2 border-dashed border-[#1E1B18]/15">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5 font-mono text-[11px] sm:text-xs text-[#1E1B18]/80 leading-relaxed">
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
                          className="px-2 py-0.5 rounded bg-[#D9C7A0]/70 border border-[#1E1B18] font-mono text-[9px] sm:text-[10px] text-[#1E1B18]"
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
