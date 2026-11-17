import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin, X, ExternalLink } from 'lucide-react';
import RetroWindow from './RetroWindow';
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
      gsap.from('.edu-card-scrapbook', {
        scrollTrigger: {
          trigger: '.edu-scrapbook-grid',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-12 sm:py-20 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Decorative Scrapbook Sticky Tag */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <span className="font-pixel text-[10px] sm:text-xs text-[#E0147E] bg-[#D9C7A0] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-[#1E1B18] shadow-retro-sm">
          // SECTION 05
        </span>
        <span className="font-hand text-lg sm:text-2xl text-[#5A0B16] font-bold truncate">
          degrees &amp; verified badges 🎓
        </span>
      </div>

      <RetroWindow
        title="academics_honors.exe - Certificate Viewer"
        icon="🎓"
        showToolbar={true}
        initialRotation={-0.3}
      >
        <div className="edu-scrapbook-grid grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 w-full">
          {/* Left: Main Degree Diploma Card */}
          <div className="edu-card-scrapbook lg:col-span-5 p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-[#FBF8EF] border-2 border-[#1E1B18] shadow-retro-sm sm:shadow-retro relative flex flex-col justify-between w-full">
            <div className="washi-tape washi-tape-gingham -top-3 left-6 sm:left-10 w-24 sm:w-28 -rotate-2" />

            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E9E7CB] border border-[#1E1B18] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#8A9A2B]" />
                </div>
                <span className="font-pixel text-[10px] sm:text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#8A9A2B] text-white border border-[#1E1B18]">
                  CGPA: {educationData.cgpa} / 10
                </span>
              </div>

              <h4 className="font-serif font-black text-xl sm:text-2xl lg:text-3xl text-[#5A0B16] mb-1.5 sm:mb-2">
                {educationData.degree}
              </h4>

              <p className="font-mono text-xs sm:text-sm font-bold text-[#E0147E] mb-3 sm:mb-4">
                {educationData.institution}
              </p>

              <div className="flex flex-col gap-1 font-mono text-[11px] sm:text-xs text-[#1E1B18]/80 mb-4 p-2.5 sm:p-3 rounded-xl bg-[#E9E7CB] border border-[#1E1B18]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#8A9A2B]" />
                  <span>{educationData.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#8A9A2B]" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              <p className="font-mono text-xs text-[#1E1B18]/85 leading-relaxed">
                {educationData.description}
              </p>
            </div>

            <div className="pt-3 sm:pt-4 mt-4 sm:mt-6 border-t-2 border-dashed border-[#1E1B18]/15 font-hand text-base sm:text-lg text-[#5A0B16] font-bold">
              Computer Science &bull; Software Engineering Rigor ✨
            </div>
          </div>

          {/* Right: Verified Credentials Grid */}
          <div className="edu-card-scrapbook lg:col-span-7 flex flex-col w-full">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h4 className="font-serif font-bold text-lg sm:text-xl text-[#5A0B16] flex items-center gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#E0147E]" />
                <span>Verified Credentials</span>
              </h4>
              <span className="font-hand text-sm sm:text-base text-[#8A9A2B] font-bold">
                click to inspect 🔍
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 flex-grow w-full">
              {certificatesData.map((cert, cIdx) => {
                const rotation = cIdx === 1 ? '1deg' : '-1deg';

                return (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#FBF8EF] border-2 border-[#1E1B18] shadow-retro-sm hover:shadow-retro hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between w-full"
                    style={{
                      transform: isDesktop ? `rotate(${rotation})` : 'none',
                    }}
                  >
                    <div>
                      {/* Thumbnail frame */}
                      <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden border border-[#1E1B18] mb-2.5 sm:mb-3 bg-black/10">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      <span className="px-2 py-0.5 rounded bg-[#D9C7A0] font-pixel text-[8px] text-[#1E1B18] border border-[#1E1B18] inline-block mb-1 font-bold">
                        {cert.issuer}
                      </span>

                      <h5 className="font-serif font-bold text-xs sm:text-sm text-[#5A0B16] mb-1 leading-snug">
                        {cert.title}
                      </h5>

                      <p className="font-mono text-[10px] text-[#1E1B18]/70 leading-normal">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-2 mt-2.5 border-t border-[#1E1B18]/15 flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-[#E0147E] font-bold">
                      <span>VERIFIED</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </RetroWindow>

      {/* Certificate Modal Lightbox (Mobile responsive) */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#FBF8EF] border-2 border-[#1E1B18] rounded-2xl p-4 sm:p-6 shadow-retro-lg overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 border-b pb-2.5 border-[#1E1B18]/20 shrink-0">
              <div>
                <h4 className="font-serif font-bold text-base sm:text-xl text-[#5A0B16] truncate">
                  {selectedCert.title}
                </h4>
                <p className="font-mono text-[11px] sm:text-xs text-[#8A9A2B] font-bold">
                  Platform: {selectedCert.issuer}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg bg-[#E9E7CB] border border-[#1E1B18] hover:bg-[#E0147E] hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border-2 border-[#1E1B18] flex items-center justify-center bg-black/10 flex-grow">
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
