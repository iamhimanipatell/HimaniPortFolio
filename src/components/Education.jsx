import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin, X, ExternalLink, Sparkles } from 'lucide-react';
import { educationData, certificatesData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef(null);

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
      gsap.from('.education-editorial-card', {
        scrollTrigger: {
          trigger: '.education-section-grid',
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
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B08A4A]" />
          <span>EDITORIAL MEDIA KIT &bull; ACADEMIC RIGOR</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight">
            Education &amp; Honors
          </h2>
          <span className="absolute -top-3 sm:-top-5 -right-6 sm:-right-12 font-script text-3xl sm:text-5xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            credentials
          </span>
        </div>

        <p className="font-mono text-xs sm:text-sm text-[#2B1512]/75 max-w-lg mt-3">
          University foundations and certified algorithmic validations.
        </p>
      </div>

      <div className="education-section-grid grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        {/* Left: Main Degree Diploma Card */}
        <div className="education-editorial-card lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#FBF8EF] border-2 border-[#3E1F1B] shadow-badge relative flex flex-col justify-between w-full">
          <div className="washi-tape-strip washi-pink-gingham -top-2.5 left-8 w-28 -rotate-2" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#B08A4A]" />
              </div>
              <span className="font-serif text-xs px-3 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-bold">
                CGPA: {educationData.cgpa} / 10
              </span>
            </div>

            <span className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold block mb-1">
              DEGREE PROGRAM
            </span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#3E1F1B] mb-2 leading-snug">
              {educationData.degree}
            </h3>

            <p className="font-script text-2xl text-[#B08A4A] mb-4">
              {educationData.institution}
            </p>

            <div className="flex flex-col gap-1.5 font-mono text-xs text-[#2B1512]/80 mb-5 p-3 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/15">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#B08A4A]" />
                <span>{educationData.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B08A4A]" />
                <span>{educationData.location}</span>
              </div>
            </div>

            <p className="font-mono text-xs text-[#2B1512]/85 leading-relaxed">
              {educationData.description}
            </p>
          </div>

          <div className="pt-4 mt-6 border-t border-[#3E1F1B]/15 flex items-center justify-between font-hand text-base text-[#3E1F1B] font-bold">
            <span>Computer Science &bull; Engineering Rigor</span>
            <span className="text-[#B08A4A]">✦</span>
          </div>
        </div>

        {/* Right: Verified Credentials Grid */}
        <div className="education-editorial-card lg:col-span-7 flex flex-col justify-between w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif font-bold text-xl text-[#3E1F1B] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#B08A4A]" />
              <span>Verified Certifications</span>
            </h3>
            <span className="font-hand text-sm sm:text-base text-[#B08A4A] font-bold">
              click to inspect proof 🔍
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-grow w-full">
            {certificatesData.map((cert, cIdx) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="p-4 rounded-3xl bg-[#FBF8EF] border-2 border-[#3E1F1B] shadow-sm hover:shadow-badge hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between w-full"
              >
                <div>
                  {/* Polaroid Frame */}
                  <div className="relative w-full h-28 rounded-2xl overflow-hidden border border-[#3E1F1B]/15 mb-3 bg-[#F6F0DC]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <span className="px-2 py-0.5 rounded-full bg-[#E3DAA0] font-mono text-[9px] text-[#3E1F1B] font-bold border border-[#3E1F1B]/15 inline-block mb-1.5">
                    {cert.issuer}
                  </span>

                  <h4 className="font-serif font-bold text-sm text-[#3E1F1B] mb-1 leading-snug">
                    {cert.title}
                  </h4>

                  <p className="font-mono text-[10px] text-[#2B1512]/70 leading-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-2 mt-3 border-t border-[#3E1F1B]/15 flex items-center justify-between font-mono text-[10px] text-[#B08A4A] font-bold">
                  <span>VERIFIED</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#FBF8EF] border-2 border-[#3E1F1B] rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 border-b pb-3 border-[#3E1F1B]/20 shrink-0">
              <div>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-[#3E1F1B] truncate">
                  {selectedCert.title}
                </h4>
                <p className="font-mono text-xs text-[#B08A4A] font-bold">
                  Platform: {selectedCert.issuer}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-full bg-[#F6F0DC] border border-[#3E1F1B] hover:bg-[#F7C8DA] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-[#3E1F1B]" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#3E1F1B]/20 flex items-center justify-center bg-black/5 flex-grow">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[60vh] w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
