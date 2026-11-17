import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Server, Activity, Radio, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.service-rate-card', {
        scrollTrigger: {
          trigger: '.services-cards-grid',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'service-1':
        return <Layers className="w-5 h-5 text-[#B08A4A]" />;
      case 'service-2':
        return <Server className="w-5 h-5 text-[#B08A4A]" />;
      case 'service-3':
        return <Activity className="w-5 h-5 text-[#B08A4A]" />;
      case 'service-4':
        return <Radio className="w-5 h-5 text-[#B08A4A]" />;
      default:
        return <Layers className="w-5 h-5 text-[#B08A4A]" />;
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-3 shadow-sm">
          <span>EDITORIAL MEDIA KIT &bull; ENGINEERING CAPABILITIES</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight">
            What I Can Build
          </h2>
          <span className="absolute -top-3 sm:-top-5 -right-8 sm:-right-14 font-script text-3xl sm:text-5xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            services
          </span>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#2B1512]/75 max-w-lg mt-3">
          Core architectural solutions delivered with production rigor and clean code.
        </p>
      </div>

      {/* Services Grid (Rate-Card Style without prices) */}
      <div className="services-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 w-full">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-rate-card p-6 sm:p-7 rounded-3xl bg-[#FBF8EF] border-2 border-[#3E1F1B] shadow-badge flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative"
          >
            {/* Washi tape accent on top */}
            <div className="washi-tape-strip washi-gold-dotted -top-2.5 left-8 w-24 rotate-1" />

            <div>
              {/* Header: Index & Icon */}
              <div className="flex items-center justify-between border-b-2 border-[#3E1F1B]/15 pb-4 mb-4">
                <span className="font-serif font-black text-2xl text-[#B08A4A]">
                  /{service.index}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/20 flex items-center justify-center">
                  {getServiceIcon(service.id)}
                </div>
              </div>

              {/* Title & Script Tag */}
              <span className="font-script text-xl text-[#B08A4A] block mb-1">
                {service.scriptTag}
              </span>
              <h3 className="font-serif font-bold text-xl text-[#3E1F1B] mb-3 leading-snug">
                {service.title}
              </h3>

              <p className="font-mono text-xs text-[#2B1512]/80 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Deliverables Checklist */}
            <div className="pt-4 border-t border-[#3E1F1B]/15 space-y-2">
              <span className="font-serif text-[10px] uppercase tracking-wider text-[#B08A4A] font-bold block">
                DELIVERABLES:
              </span>
              {service.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2 font-mono text-xs text-[#2B1512]/90">
                  <span className="text-[#B08A4A] text-xs font-bold">&bull;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
