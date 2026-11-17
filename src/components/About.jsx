import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, educationData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. ScrollTrigger entrance for the section
      gsap.from('.about-lanyard-hero-col', {
        scrollTrigger: {
          trigger: '.about-composition-container',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.about-spec-card', {
        scrollTrigger: {
          trigger: '.about-composition-container',
          start: 'top 80%',
        },
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      // 2. Continuous Soft Gentle Swing of the ID Card (Left-Right pendulum)
      gsap.to('.about-swinging-id-card', {
        rotation: 2.2,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'top center',
      });

      // 3. Subtle synchronized sway on the lanyard thread
      gsap.to('.about-lanyard-thread', {
        rotation: 0.8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'right top',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const specRows = [
    { label: "LOCATION", value: personalInfo.location },
    { label: "CORE STACK", value: ".NET Core, Node.js, React.js, SQL Server, MongoDB" },
    { label: "BACKEND", value: "ASP.NET Core Web API, EF Core, Express.js, JWT, RESTful APIs" },
    { label: "FRONTEND", value: "React.js, GSAP & ScrollTrigger, Tailwind CSS, Vite" },
    { label: "DATABASES", value: "SQL Server (SSMS), MongoDB, Mongoose ODM, LINQ" },
    { label: "PRACTICES", value: "Agile / Scrum Leadership, Performance Tuning, Clean Architecture" },
    { label: "EDUCATION", value: `${educationData.degree} — Lovely Professional University (${educationData.period}, CGPA ${educationData.cgpa})` },
    { label: "CURRENTLY", value: "Programmer Analyst Trainee (PAT) at Cognizant (Hyderabad)" },
  ];

  const statHighlights = [
    { value: "25%", label: "PAGE LOAD REDUCTION" },
    { value: "40%", label: "CONTENT UPLOAD SPEEDUP" },
    { value: "15+", label: "AGENTS SUPPORTED" },
    { value: "Agile", label: "TEAM LEADERSHIP" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full overflow-visible"
    >
      {/* =========================================================================
          SECTION HEADING: "Developer Profile & Bio"
          The lanyard thread starts right beside this heading as in the reference!
      ========================================================================== */}
      <div className="flex flex-col items-center sm:items-start max-w-5xl mx-auto mb-6 sm:mb-8 px-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-3 shadow-xs">
          <span>EDITORIAL MEDIA KIT &bull; SPEC SHEET</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight">
            Developer Profile &amp; Bio
          </h2>
          <span className="absolute -top-3 sm:-top-5 -right-6 sm:-right-12 font-script text-3xl sm:text-5xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            about me
          </span>
        </div>
      </div>

      {/* =========================================================================
          COMPOSITION GRID:
          Left: Hanging ID Card (no enclosing box, gently swinging, wavy lanyard thread)
          Right: Technical Specification Sheet Card
      ========================================================================== */}
      <div className="about-composition-container max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start relative">
        {/* =====================================================================
            LEFT COLUMN: THE HANGING LANYARD ID BADGE (NO ENCLOSING BOX!)
            Starts from near heading, wavy S-curve ribbon with daisy flowers,
            metallic clip, and freely swinging ID card with himani2.
        ====================================================================== */}
        <div className="about-lanyard-hero-col lg:col-span-4 flex flex-col items-center relative select-none">
          {/* 1. WAVY LANYARD THREAD (SVG ribbon starting from heading with soft S-curve) */}
          <div className="w-full max-w-[280px] h-[160px] sm:h-[180px] relative pointer-events-none flex justify-center -mb-3 z-20">
            <svg
              className="about-lanyard-thread w-full h-full filter drop-shadow-[0_8px_16px_rgba(43,21,18,0.25)]"
              viewBox="0 0 280 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Lanyard Fabric Ribbon in Dark Chocolate Brown (#3E1F1B) */}
              <path
                d="M 270,12 
                   C 220,-10 160,-10 120,30 
                   C 80,70 50,85 75,130 
                   C 90,155 125,160 140,178"
                stroke="#3E1F1B"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Dashed Gold/Cream Border Stitching along the Ribbon */}
              <path
                d="M 268,12 
                   C 218,-10 158,-10 118,30 
                   C 78,70 48,85 73,130 
                   C 88,155 123,160 138,178"
                stroke="#F6F0DC"
                strokeWidth="1.6"
                strokeDasharray="4 3"
                strokeLinecap="round"
                fill="none"
              />

              {/* Printed White Daisy Floral Stars along the Ribbon (✿ ✦ ✿) */}
              {/* Flower 1 (Near top origin) */}
              <g transform="translate(230, 6) scale(0.95)">
                <circle cx="0" cy="0" r="2.5" fill="#B08A4A" />
                <path d="M-6,0 C-6,-3 -3,-6 0,-6 C3,-6 6,-3 6,0 C6,3 3,6 0,6 C-3,6 -6,3 -6,0 Z" fill="#F6F0DC" opacity="0.95" />
              </g>

              {/* Flower 2 (Upper curve crest) */}
              <g transform="translate(160, 8) scale(0.95)">
                <circle cx="0" cy="0" r="2.5" fill="#B08A4A" />
                <path d="M-6,0 C-6,-3 -3,-6 0,-6 C3,-6 6,-3 6,0 C6,3 3,6 0,6 C-3,6 -6,3 -6,0 Z" fill="#F6F0DC" opacity="0.95" />
              </g>

              {/* Flower 3 (Middle loop) */}
              <g transform="translate(105, 48) scale(0.95)">
                <circle cx="0" cy="0" r="2.5" fill="#B08A4A" />
                <path d="M-6,0 C-6,-3 -3,-6 0,-6 C3,-6 6,-3 6,0 C6,3 3,6 0,6 C-3,6 -6,3 -6,0 Z" fill="#F6F0DC" opacity="0.95" />
              </g>

              {/* Flower 4 (Lower bend) */}
              <g transform="translate(74, 105) scale(0.95)">
                <circle cx="0" cy="0" r="2.5" fill="#B08A4A" />
                <path d="M-6,0 C-6,-3 -3,-6 0,-6 C3,-6 6,-3 6,0 C6,3 3,6 0,6 C-3,6 -6,3 -6,0 Z" fill="#F6F0DC" opacity="0.95" />
              </g>

              {/* Flower 5 (Near clip) */}
              <g transform="translate(112, 155) scale(0.95)">
                <circle cx="0" cy="0" r="2.5" fill="#B08A4A" />
                <path d="M-6,0 C-6,-3 -3,-6 0,-6 C3,-6 6,-3 6,0 C6,3 3,6 0,6 C-3,6 -6,3 -6,0 Z" fill="#F6F0DC" opacity="0.95" />
              </g>

              {/* Metal Swivel Ring & Carabiner Hook */}
              <g transform="translate(140, 178)">
                <circle cx="0" cy="0" r="6" fill="#3E1F1B" stroke="#C7A263" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="2.5" fill="#B08A4A" />
              </g>
            </svg>
          </div>

          {/* 2. THE SWINGING ID CARD (Gently swinging left-to-right with transform-origin: top center) */}
          <div className="about-swinging-id-card relative w-[255px] sm:w-[275px] origin-top select-none z-10 -mt-2">
            {/* Carabiner Clasp Hook over the Eyelet */}
            <div className="w-4 h-6 mx-auto -mb-1 bg-gradient-to-b from-[#C7A263] via-[#B08A4A] to-[#8C682D] rounded-b-sm border border-[#2B1512] shadow-sm relative z-30" />

            {/* A. Starburst Sticker Accent (Bottom Right, peaking out behind) */}
            <div className="absolute -bottom-5 -right-5 z-0 pointer-events-none transform rotate-12 hover:rotate-45 transition-transform duration-700">
              <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 0L27.5 16.5L44 12L32.5 24L44 36L27.5 31.5L24 48L20.5 31.5L4 36L15.5 24L4 12L20.5 16.5L24 0Z"
                  fill="#3E1F1B"
                />
              </svg>
            </div>

            {/* B. The Scalloped Badge Card Body */}
            <div className="relative rounded-2xl bg-[#FBF8EF] border-2 border-[#3E1F1B] shadow-[0_22px_45px_-10px_rgba(43,21,18,0.35)] overflow-visible z-10 transition-transform duration-300">
              {/* Authentic Left Scalloped Border (SVG continuous semicircular arcs) */}
              <svg
                className="absolute -left-3 top-10 bottom-10 w-3.5 h-[calc(100%-80px)] pointer-events-none z-20"
                viewBox="0 0 14 260"
                preserveAspectRatio="none"
              >
                <path
                  d="M 14,0 
                     A 13,13 0 0,0 14,26 
                     A 13,13 0 0,0 14,52 
                     A 13,13 0 0,0 14,78 
                     A 13,13 0 0,0 14,104 
                     A 13,13 0 0,0 14,130 
                     A 13,13 0 0,0 14,156 
                     A 13,13 0 0,0 14,182 
                     A 13,13 0 0,0 14,208 
                     A 13,13 0 0,0 14,234 
                     A 13,13 0 0,0 14,260 
                     L 14,0 Z"
                  fill="#3E1F1B"
                />
              </svg>

              {/* Authentic Right Scalloped Border (SVG continuous semicircular arcs) */}
              <svg
                className="absolute -right-3 top-10 bottom-10 w-3.5 h-[calc(100%-80px)] pointer-events-none z-20"
                viewBox="0 0 14 260"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,0 
                     A 13,13 0 0,1 0,26 
                     A 13,13 0 0,1 0,52 
                     A 13,13 0 0,1 0,78 
                     A 13,13 0 0,1 0,104 
                     A 13,13 0 0,1 0,130 
                     A 13,13 0 0,1 0,156 
                     A 13,13 0 0,1 0,182 
                     A 13,13 0 0,1 0,208 
                     A 13,13 0 0,1 0,234 
                     A 13,13 0 0,1 0,260 
                     L 0,0 Z"
                  fill="#3E1F1B"
                />
              </svg>

              {/* Top Stitched Chevron Banner Tab with Eyelet Hole */}
              <div className="relative pt-3 pb-3.5 px-4 bg-[#3E1F1B] text-[#F6F0DC] rounded-t-[14px]">
                {/* Decorative dashed stitching following the chevron */}
                <div className="absolute inset-x-3 bottom-1 border-b border-dashed border-[#F6F0DC]/70" />

                {/* Centered eyelet hole for carabiner clip */}
                <div className="w-6 h-2.5 mx-auto rounded-full bg-[#F6F0DC] border border-[#2B1512] shadow-inner" />
              </div>

              {/* Card Interior: Centered Square Photo Frame with himani2 */}
              <div className="p-4 sm:p-5 pt-3 pb-3 flex flex-col items-center">
                {/* Square Photo Frame with Neutral Studio Framing */}
                <div className="relative w-36 sm:w-40 h-36 sm:h-40 rounded-sm border border-[#3E1F1B]/25 shadow-inner overflow-hidden bg-[#D8D2C2] flex items-center justify-center">
                  <img
                    src="/himani2.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter drop-shadow-sm transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Typography below photo: Bold Name + Italic Title */}
                <div className="text-center mt-3 mb-1">
                  <h4 className="font-sans font-black text-2xl sm:text-[25px] text-[#3E1F1B] uppercase tracking-wider leading-none">
                    HIMANI
                  </h4>
                  <p className="font-serif italic font-bold text-xs sm:text-[13px] text-[#3E1F1B]/90 mt-1">
                    Software Engineer
                  </p>
                </div>

                {/* Barcode Strip */}
                <div className="w-36 sm:w-40 h-6 barcode-strip opacity-90 mt-2 mb-1" />
              </div>

              {/* Bottom Stitched Chevron Banner */}
              <div className="relative py-2 bg-[#3E1F1B] rounded-b-[14px] text-center overflow-hidden">
                <div className="absolute inset-x-3 top-0.5 border-t border-dashed border-[#F6F0DC]/70" />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: TECHNICAL SPECIFICATION SHEET CARD
            Clean, professional, containing all verified candidate specs and stats!
        ====================================================================== */}
        <div className="about-spec-card lg:col-span-8 rounded-3xl bg-[#FBF8EF] border-2 border-[#3E1F1B] p-6 sm:p-8 shadow-badge flex flex-col justify-between">
          <div>
            {/* Spec Sheet Header */}
            <div className="flex items-center justify-between border-b-2 border-[#3E1F1B] pb-4 mb-5">
              <div>
                <span className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold block">
                  TECHNICAL SPECIFICATION
                </span>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-[#3E1F1B]">
                  DEVELOPER PROFILE
                </h3>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] font-mono text-xs font-bold border border-[#3E1F1B]/20">
                ACTIVE CANDIDATE
              </div>
            </div>

            {/* Candidate Bio Paragraphs */}
            <div className="mb-5 space-y-2 font-mono text-xs sm:text-[13px] text-[#2B1512]/85 leading-relaxed bg-[#F6F0DC]/70 p-3.5 rounded-2xl border border-[#3E1F1B]/15">
              {personalInfo.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Spec Rows Table */}
            <div className="divide-y divide-[#3E1F1B]/15 font-mono text-xs">
              {specRows.map((row) => (
                <div key={row.label} className="py-2.5 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                  <span className="font-serif text-[11px] font-bold text-[#B08A4A] tracking-wider shrink-0 w-28">
                    {row.label}
                  </span>
                  <span className="text-[#2B1512] font-medium sm:text-right leading-relaxed flex-grow">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom 4 Key Stat Cards (Exact match to reference image 3) */}
          <div className="mt-6 pt-5 border-t-2 border-[#3E1F1B] grid grid-cols-2 sm:grid-cols-4 gap-3">
            {statHighlights.map((stat, i) => (
              <div key={i} className="p-3 sm:p-4 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/15 text-center shadow-xs">
                <span className="font-serif font-black text-2xl sm:text-3xl text-[#3E1F1B] block leading-none">
                  {stat.value}
                </span>
                <span className="font-serif text-[9px] sm:text-[10px] uppercase tracking-wider text-[#B08A4A] font-bold block mt-1.5 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}