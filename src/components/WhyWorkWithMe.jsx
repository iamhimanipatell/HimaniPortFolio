import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { whyWorkWithMe } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function WhyWorkWithMe() {
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
      gsap.from('.why-sticky-card', {
        scrollTrigger: {
          trigger: '.why-stickies-container',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'back.out(1.5)',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-me"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
          <span>EDITORIAL MEDIA KIT &bull; VALUE PILLARS</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight">
            Why Work With Me?
          </h2>
          <span className="absolute -top-3 sm:-top-5 -right-6 sm:-right-12 font-script text-3xl sm:text-5xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            strengths
          </span>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#2B1512]/75 max-w-lg mt-3">
          Verified accomplishments, full-stack competencies, and proven Agile ownership.
        </p>
      </div>

      {/* 4 Butter Yellow Sticky Notes Grid */}
      <div className="why-stickies-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full relative">
        {whyWorkWithMe.map((item, idx) => (
          <div
            key={item.id}
            className="why-sticky-card sticky-note rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between border border-[#3E1F1B]/15"
            style={{
              transform: isDesktop ? `rotate(${item.rotation})` : 'none',
            }}
          >
            {/* Patterned Washi Tape on top */}
            <div className={`washi-tape-strip ${item.tape} -top-2.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 -rotate-1`} />

            <div>
              {/* Script Title */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-script text-2xl sm:text-3xl text-[#3E1F1B] font-bold">
                  {item.scriptTitle}
                </span>
                <span className="font-serif text-xs font-bold text-[#B08A4A] px-2 py-0.5 rounded-full bg-white/50 border border-[#B08A4A]/30">
                  0{idx + 1}
                </span>
              </div>

              {/* Serif Heading */}
              <h3 className="font-serif font-bold text-lg text-[#3E1F1B] mb-2 leading-tight">
                {item.heading}
              </h3>

              {/* Line description */}
              <p className="font-mono text-xs sm:text-[13px] text-[#2B1512]/85 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Handwritten stamp on bottom */}
            <div className="pt-4 mt-4 border-t border-[#3E1F1B]/15 flex items-center justify-between font-hand text-base text-[#3E1F1B]/70 font-bold">
              <span>verified proof</span>
              <span className="text-[#B08A4A]">✦</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
