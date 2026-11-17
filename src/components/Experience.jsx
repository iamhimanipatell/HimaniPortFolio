import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Sparkles, Star } from 'lucide-react';
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
        '.timeline-gold-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.experience-timeline-container',
            start: 'top 75%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        }
      );

      gsap.from('.experience-stacked-card', {
        scrollTrigger: {
          trigger: '.experience-timeline-container',
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
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
          <span>EDITORIAL MEDIA KIT &bull; CHRONOLOGY</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight">
            Career Timeline
          </h2>
          <span className="absolute -top-3 sm:-top-5 -right-6 sm:-right-12 font-script text-3xl sm:text-5xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            journey
          </span>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#2B1512]/75 max-w-lg mt-3">
          Engineering roles, Agile leadership, and production-tested performance deliverables.
        </p>
      </div>

      {/* Experience Timeline Container */}
      <div className="experience-timeline-container relative max-w-4xl mx-auto pl-7 sm:pl-12 w-full">
        {/* Animated Gold Central Line */}
        <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-1 bg-[#D9D2B8] rounded-full">
          <div className="timeline-gold-line w-full h-full bg-gradient-to-b from-[#B08A4A] via-[#3E1F1B] to-[#B08A4A] origin-top rounded-full" />
        </div>

        <div className="space-y-10 sm:space-y-14 w-full">
          {experienceData.map((item, idx) => {
            const rotation = idx % 2 === 0 ? '-1deg' : '1deg';

            return (
              <div key={item.id} className="relative w-full">
                {/* Gold Star Marker on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[41px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FBF8EF] border-2 border-[#B08A4A] shadow-md flex items-center justify-center z-20 text-[#B08A4A]">
                  <span className="text-xs">✦</span>
                </div>

                {/* Stacked Cream Card with Binder Clip / Tape */}
                <div
                  className="experience-stacked-card p-5 sm:p-7 lg:p-8 rounded-3xl bg-[#FBF8EF] border-2 border-[#3E1F1B] shadow-badge relative w-full"
                  style={{
                    transform: isDesktop ? `rotate(${rotation})` : 'none',
                  }}
                >
                  {/* Washi tape accent on top */}
                  <div className="washi-tape-strip washi-gold-dotted -top-2.5 right-8 sm:right-12 w-28 sm:w-32 rotate-1" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-serif font-black text-xl sm:text-2xl text-[#3E1F1B]">
                          {item.role}
                        </h3>
                        {item.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#E3DAA0] text-[#3E1F1B] font-serif text-[10px] font-bold border border-[#B08A4A]/40">
                            CURRENT ROLE
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs text-[#B08A4A] font-bold">
                        <span>{item.company}</span>
                        <span>&bull;</span>
                        <span className="text-[#2B1512]/70 inline-flex items-center gap-1 font-normal">
                          <MapPin className="w-3 h-3 text-[#B08A4A]" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F0DC] border border-[#3E1F1B]/15 font-mono text-xs font-semibold text-[#3E1F1B] self-start sm:self-auto">
                      <Calendar className="w-3 h-3 text-[#B08A4A]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-mono text-xs sm:text-sm text-[#2B1512]/90 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Key Responsibilities */}
                  {item.responsibilities && (
                    <div className="p-4 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/15 mb-5 space-y-2">
                      <span className="font-serif text-[10px] uppercase tracking-wider text-[#B08A4A] font-bold block">
                        KEY DELIVERABLES:
                      </span>
                      {item.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 font-mono text-xs text-[#2B1512]/90 leading-relaxed">
                          <span className="text-[#B08A4A] text-xs mt-0.5">✦</span>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-full bg-[#E3DAA0] text-[#3E1F1B] font-mono text-[10px] sm:text-[11px] font-semibold border border-[#3E1F1B]/15"
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
    </section>
  );
}
