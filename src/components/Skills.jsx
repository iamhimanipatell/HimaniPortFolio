import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 4 Compact Core Quadrants exactly matching the 2x2 sketch mindmap layout
const QUADRANTS = [
  {
    id: 'languages',
    title: 'Languages & Core',
    icon: 'code',
    isLeft: true, // Skills on left, bubble on right
    skills: [
      'C#',
      'JavaScript',
      'SQL',
      'Python',
      'TypeScript',
      'C++',
      'HTML5 & CSS3',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Craft',
    icon: 'laptop',
    isLeft: false, // Bubble on left, skills on right
    skills: [
      'React.js',
      'GSAP & ScrollTrigger',
      'Tailwind CSS',
      'Responsive UI',
      'Vite',
      'State Management',
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'stack',
    isLeft: true,
    skills: [
      '.NET Core',
      'ASP.NET Core Web API',
      'Node.js & Express.js',
      'Entity Framework Core',
      'API Integration',
      'JWT Authentication',
      'Multer File Uploads',
    ],
  },
  {
    id: 'databases-devops',
    title: 'Databases & DevOps',
    icon: 'chart', // Matches the 3-bar chart doodle in the user's sketch
    isLeft: false,
    skills: [
      'SQL Server',
      'MongoDB',
      'Azure & Docker',
      'Git & GitHub',
      'Postman',
      'UI/UX & Figma',
      'Agile & Clean Architecture',
    ],
  },
];

// Delicate hand-drawn top doodle icons with 3 radiating rays
const TopBubbleIcon = ({ type }) => {
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 select-none pointer-events-none z-10">
      {/* Left 3 tiny radiating rays */}
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="text-[#3E1F1B]">
        <path d="M10 9L2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 5L1 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 1L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Central icon */}
      <div className="px-0.5 text-[#3E1F1B]">
        {type === 'code' && (
          <span className="font-mono font-bold text-[10px] sm:text-[11px] tracking-tight">
            &lt;/&gt;
          </span>
        )}
        {type === 'laptop' && (
          <svg width="16" height="12" viewBox="0 0 20 15" fill="none" className="text-[#3E1F1B]">
            <rect x="2" y="1" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="#FFFDF8" />
            <line x1="1" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )}
        {type === 'stack' && (
          <svg width="15" height="13" viewBox="0 0 18 16" fill="none" className="text-[#3E1F1B]">
            <path d="M9 1L16 4.5L9 8L2 4.5L9 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="#FFFDF8" />
            <path d="M2 8L9 11.5L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 11.5L9 15L16 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {type === 'chart' && (
          <svg width="15" height="13" viewBox="0 0 18 16" fill="none" className="text-[#3E1F1B]">
            {/* 3 vertical bars matching the reference sketch */}
            <rect x="2" y="7" width="3" height="8" rx="0.8" stroke="currentColor" strokeWidth="1.5" fill="#FFFDF8" />
            <rect x="7.5" y="2" width="3" height="13" rx="0.8" stroke="currentColor" strokeWidth="1.5" fill="#FFFDF8" />
            <rect x="13" y="5" width="3" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.5" fill="#FFFDF8" />
          </svg>
        )}
      </div>

      {/* Right 3 tiny radiating rays */}
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="text-[#3E1F1B]">
        <path d="M2 9L10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M1 5L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 1L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Hand-drawn organic rounded speech bubble
const HandDrawnBubble = ({ title, iconType }) => {
  return (
    <div className="relative shrink-0 w-[125px] sm:w-[145px] md:w-[155px] h-[65px] sm:h-[75px] flex items-center justify-center select-none group">
      <TopBubbleIcon type={iconType} />

      {/* Pebble cloud SVG outline */}
      <svg
        viewBox="0 0 160 80"
        className="absolute inset-0 w-full h-full filter drop-shadow-xs transition-transform duration-200 group-hover:scale-105"
        preserveAspectRatio="none"
      >
        <path
          d="M 18,40 
             C 12,22 22,10 52,7 
             C 80,4 120,6 142,11 
             C 154,16 158,30 155,45 
             C 152,60 140,71 115,74 
             C 88,77 48,75 25,70 
             C 12,67 11,54 18,40 Z"
          fill="#FFFDF8"
          stroke="#3E1F1B"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Title */}
      <h3 className="relative z-10 font-serif font-black text-xs sm:text-[13px] md:text-sm text-[#3E1F1B] leading-tight text-center px-2 tracking-tight">
        {title}
      </h3>
    </div>
  );
};

// SVG fanning doodle arrows (compact, delicate, mathematically aligned)
const FanningArrows = ({ count, isLeft, height }) => {
  const width = 42;
  const yCenter = height / 2;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-7 sm:w-9 md:w-10 shrink-0 pointer-events-none text-[#3E1F1B]"
      style={{ height: `${height}px` }}
      fill="none"
    >
      {Array.from({ length: count }).map((_, idx) => {
        const yEnd = count === 1 ? yCenter : 12 + ((height - 24) / (count - 1)) * idx;
        const yStart = yCenter + (idx - (count - 1) / 2) * 2.5;

        if (isLeft) {
          // Starts at right edge (touching bubble) -> curves left to skill
          const xStart = width - 2;
          const xEnd = 4;
          return (
            <g key={idx}>
              <path
                d={`M ${xStart} ${yStart} C ${width * 0.55} ${yStart}, ${width * 0.35} ${yEnd}, ${xEnd + 2} ${yEnd}`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d={`M ${xEnd + 5} ${yEnd - 3} L ${xEnd} ${yEnd} L ${xEnd + 5} ${yEnd + 3}`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        } else {
          // Starts at left edge (touching bubble) -> curves right to skill
          const xStart = 2;
          const xEnd = width - 4;
          return (
            <g key={idx}>
              <path
                d={`M ${xStart} ${yStart} C ${width * 0.45} ${yStart}, ${width * 0.65} ${yEnd}, ${xEnd - 2} ${yEnd}`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d={`M ${xEnd - 5} ${yEnd - 3} L ${xEnd} ${yEnd} L ${xEnd - 5} ${yEnd + 3}`}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        }
      })}
    </svg>
  );
};

// Compact cluster row item
const SketchQuadrant = ({ data }) => {
  const count = data.skills.length;
  // Compact line height: 23px per item gives an ultra-compact ~160px height
  const clusterHeight = count * 23;

  if (data.isLeft) {
    return (
      <div className="flex items-center justify-end w-full max-w-[360px] sm:max-w-[400px] mx-auto py-1.5">
        {/* Skills on left (right-aligned) */}
        <div
          className="flex flex-col justify-between text-right py-1 shrink min-w-0"
          style={{ height: `${clusterHeight}px` }}
        >
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="font-serif sm:font-sans font-bold text-[11px] sm:text-xs md:text-[13px] text-[#3E1F1B] hover:text-[#B08A4A] transition-colors leading-none select-none cursor-default whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Doodle arrows pointing left */}
        <FanningArrows count={count} isLeft={true} height={clusterHeight} />

        {/* Bubble on right */}
        <HandDrawnBubble title={data.title} iconType={data.icon} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-start w-full max-w-[360px] sm:max-w-[400px] mx-auto py-1.5">
        {/* Bubble on left */}
        <HandDrawnBubble title={data.title} iconType={data.icon} />

        {/* Doodle arrows pointing right */}
        <FanningArrows count={count} isLeft={false} height={clusterHeight} />

        {/* Skills on right (left-aligned) */}
        <div
          className="flex flex-col justify-between text-left py-1 shrink min-w-0"
          style={{ height: `${clusterHeight}px` }}
        >
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="font-serif sm:font-sans font-bold text-[11px] sm:text-xs md:text-[13px] text-[#3E1F1B] hover:text-[#B08A4A] transition-colors leading-none select-none cursor-default whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }
};

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.sketch-mindmap-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-8 sm:py-10 px-3 sm:px-6 md:px-8 max-w-4xl mx-auto z-10 w-full"
    >
      {/* Compact Section Header */}
      <div className="flex flex-col items-center text-center mb-5 sm:mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-[11px] font-semibold mb-1.5 shadow-xs">
          <span>EDITORIAL MEDIA KIT &bull; SKILLS MINDMAP</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-2xl sm:text-3xl lg:text-4xl text-[#3E1F1B] tracking-tight">
            Technical Repertoire
          </h2>
          <span className="absolute -top-2.5 -right-6 sm:-right-8 font-script text-xl sm:text-3xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            mindmap
          </span>
        </div>

        <p className="font-mono text-[11px] sm:text-xs text-[#2B1512]/75 max-w-sm mt-1">
          Hand-drawn architectural clusters highlighting full-stack engineering proficiencies.
        </p>
      </div>

      {/* =========================================================================
          THE SKETCHBOOK GRAPH PAPER CANVAS (Compact, 2x2 Layout matching the sketch)
      ========================================================================== */}
      <div
        className="sketch-mindmap-card rounded-2xl border border-[#3E1F1B]/25 p-4 sm:p-6 md:p-8 shadow-sm relative overflow-hidden bg-[#FAF7EE]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(62, 31, 27, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(62, 31, 27, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        {/* Subtle washi tape strip */}
        <div className="washi-tape-strip washi-gold-dotted -top-2 left-10 w-20 -rotate-1 pointer-events-none" />

        {/* Top-Left Delicate Sparkle Star (✦) */}
        <div className="absolute top-3 left-3 text-[#3E1F1B] pointer-events-none select-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 0C12 7 12 7 19 12C12 17 12 17 12 24C12 17 12 17 5 12C12 7 12 7 12 0Z" fill="currentColor" />
          </svg>
        </div>

        {/* Center-Top Delicate Doodle Heart (♡) */}
        <div className="hidden sm:flex absolute top-4 left-1/2 -translate-x-1/2 text-[#3E1F1B] pointer-events-none select-none">
          <svg width="18" height="16" viewBox="0 0 26 24" fill="none">
            <path
              d="M13 22 C 10 18, 2 13, 2 7.5 C 2 3.5, 5.5 1.5, 9 2 C 11.2 2.3, 12.5 3.8, 13 4.5 C 13.5 3.8, 14.8 2.3, 17 2 C 20.5 1.5, 24 3.5, 24 7.5 C 24 13, 16 18, 13 22 Z"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Right-Middle Delicate Sparkle Star (✦) */}
        <div className="hidden sm:flex absolute top-1/2 right-3 -translate-y-1/2 text-[#3E1F1B] pointer-events-none select-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 0C12 7 12 7 19 12C12 17 12 17 12 24C12 17 12 17 5 12C12 7 12 7 12 0Z" fill="currentColor" />
          </svg>
        </div>

        {/* Center-Bottom Delicate Doodle Swirl (➿) */}
        <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-[#3E1F1B] pointer-events-none select-none">
          <svg width="32" height="18" viewBox="0 0 44 26" fill="none">
            <path
              d="M 4 20 C 12 26, 24 24, 30 16 C 34 10, 32 3, 26 4 C 20 5, 21 16, 30 18 C 36 19, 41 14, 43 10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Bottom-Right Delicate Sparkle Star (✦) */}
        <div className="absolute bottom-3 right-3 text-[#3E1F1B] pointer-events-none select-none">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 0C12 7 12 7 19 12C12 17 12 17 12 24C12 17 12 17 5 12C12 7 12 7 12 0Z" fill="currentColor" />
          </svg>
        </div>

        {/* =====================================================================
            2x2 GRID (Compact & Perfectly Balanced)
        ====================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 relative z-10">
          {/* Top-Left: Languages & Core */}
          <SketchQuadrant data={QUADRANTS[0]} />

          {/* Top-Right: Frontend & UI Craft */}
          <SketchQuadrant data={QUADRANTS[1]} />

          {/* Bottom-Left: Backend & APIs */}
          <SketchQuadrant data={QUADRANTS[2]} />

          {/* Bottom-Right: Databases & DevOps */}
          <SketchQuadrant data={QUADRANTS[3]} />
        </div>
      </div>
    </section>
  );
}
