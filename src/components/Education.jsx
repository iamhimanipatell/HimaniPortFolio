import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { educationData, certificatesData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.edu-header', {
        scrollTrigger: {
          trigger: '.edu-header',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.edu-card', {
        scrollTrigger: {
          trigger: '.edu-card',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.cert-card', {
        scrollTrigger: {
          trigger: '.cert-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
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
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="edu-header flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f5a0] tracking-widest uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
          <span>05 / ACADEMICS &amp; CREDENTIALS</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          Education &amp; Honors. <br />
          <span className="text-slate-400 font-semibold">Foundational Rigor &amp; Validations.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Education Highlight Card */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="edu-card h-full p-8 rounded-3xl bg-surface-1/90 border border-white/10 hover:border-[#00f5a0]/40 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00f5a0]/10 border border-[#00f5a0]/30 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-[#00f5a0]" />
              </div>

              <span className="px-3 py-1 rounded-full bg-[#00f5a0]/15 text-[#00f5a0] font-mono text-xs font-semibold border border-[#00f5a0]/30 inline-block mb-3">
                CGPA: {educationData.cgpa} / 10
              </span>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                {educationData.degree}
              </h3>

              <p className="font-display font-semibold text-lg text-[#00d8f6] mb-4">
                {educationData.institution}
              </p>

              <div className="flex flex-col gap-2 font-mono text-xs text-slate-400 mb-6 border-y border-white/5 py-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{educationData.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300/90 leading-relaxed">
                {educationData.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#00f5a0]">
              <CheckCircle2 className="w-4 h-4 text-[#00f5a0]" />
              <span>Accredited Curriculum &bull; Computer Science</span>
            </div>
          </div>
        </div>

        {/* Certifications Showcase */}
        <div className="lg:col-span-7 flex flex-col">
          <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#00d8f6]" />
            <span>Verified Certifications</span>
          </h3>

          <div className="cert-grid grid grid-cols-1 sm:grid-cols-2 gap-5 flex-grow">
            {certificatesData.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="cert-card group p-5 rounded-2xl bg-surface-1/80 border border-white/5 hover:border-[#00f5a0]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Certificate Thumbnail Preview */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 bg-black/60 border border-white/5">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-[#07080b]/90 text-[#00f5a0] font-mono text-[11px] font-bold border border-[#00f5a0]/40">
                        View Certificate
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 font-mono text-[10px] font-medium border border-white/5 inline-block mb-2">
                    {cert.issuer}
                  </span>

                  <h4 className="font-display font-bold text-base text-white group-hover:text-[#00f5a0] transition-colors mb-1.5">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-[#00f5a0] transition-colors">
                  <span>Verified Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-surface-1 border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-display font-bold text-xl text-white">
                  {selectedCert.title}
                </h4>
                <p className="font-mono text-xs text-[#00f5a0]">{selectedCert.issuer}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[68vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
