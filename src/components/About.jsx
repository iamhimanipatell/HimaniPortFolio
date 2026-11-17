import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, CheckCircle2, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, educationData, keyStats } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-panel-left', {
        scrollTrigger: {
          trigger: '.about-editorial-grid',
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.about-spec-right', {
        scrollTrigger: {
          trigger: '.about-editorial-grid',
          start: 'top 80%',
        },
        x: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3DAA0] text-[#3E1F1B] border border-[#B08A4A]/40 font-mono text-xs font-semibold mb-3 shadow-sm">
          <span>EDITORIAL MEDIA KIT &bull; SPEC SHEET</span>
        </div>

        <div className="relative inline-block">
          <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#3E1F1B] tracking-tight">
            Developer Profile &amp; Bio
          </h2>
          <span className="absolute -top-3 sm:-top-5 -right-8 sm:-right-14 font-script text-3xl sm:text-5xl text-[#B08A4A] -rotate-6 pointer-events-none select-none">
            about me
          </span>
        </div>
      </div>

      {/* Split Layout: Left Brown Panel + Right Spec Sheet Card */}
      <div className="about-editorial-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full items-stretch">
        {/* Left: Chocolate Brown Panel with Greeting, Bio, Polaroid & Binder Clip */}
        <div className="about-panel-left lg:col-span-5 rounded-3xl bg-brown-pinstripe text-[#F6F0DC] p-6 sm:p-8 border-2 border-[#3E1F1B] shadow-2xl relative flex flex-col justify-between overflow-hidden">
          <div>
            <span className="font-script text-3xl sm:text-4xl text-[#F7C8DA] block mb-2">
              Hey there, I'm Himani
            </span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-white mb-4 tracking-tight leading-snug">
              Software Engineer with an eye for speed &amp; design.
            </h3>

            <div className="space-y-3 font-mono text-xs sm:text-sm text-[#F6F0DC]/85 leading-relaxed mb-6">
              {personalInfo.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Polaroid with Binder Clip */}
            <div className="relative w-full max-w-[240px] sm:max-w-[260px] mx-auto mt-6 mb-4">
              {/* Binder Clip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-6 rounded-t-sm bg-gradient-to-b from-[#C7A263] to-[#B08A4A] border border-[#2B1512] z-30 shadow-md flex items-center justify-center">
                <div className="w-3 h-1.5 rounded-full bg-[#3E1F1B]" />
              </div>

              {/* Polaroid Card */}
              <div className="polaroid-card p-3 rounded-2xl bg-[#FBF8EF] border border-[#3E1F1B]/20 text-[#3E1F1B] rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-[#E3DAA0] mb-2.5">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-center pb-1">
                  <p className="font-hand text-lg text-[#3E1F1B] font-bold">
                    Himani Patel &hearts;
                  </p>
                  <p className="font-mono text-[10px] text-[#B08A4A] uppercase tracking-wider">
                    Software Engineer
                  </p>
                </div>
              </div>

              {/* Floating Handwritten Sticker */}
              <div className="absolute -bottom-3 -right-4 bg-[#F7C8DA] text-[#3E1F1B] px-3 py-1 rounded-full font-hand text-sm font-bold border border-[#3E1F1B] shadow-sm -rotate-6 select-none">
                building cool stuff
              </div>
            </div>
          </div>

          {/* Torn Lined-Notebook Note */}
          <div className="mt-6 p-4 rounded-xl bg-[#FBF8EF] text-[#2B1512] border border-[#3E1F1B]/20 shadow-sm relative">
            <div className="washi-tape-strip washi-pink-gingham -top-2 left-6 w-20 rotate-1" />
            <span className="font-serif text-[10px] uppercase tracking-wider text-[#B08A4A] font-bold block mb-1">
              PHILOSOPHY
            </span>
            <p className="font-hand text-base text-[#3E1F1B] leading-snug">
              &ldquo;Engineering shouldn't just be functional—it should feel seamless, responsive, and thoughtfully designed.&rdquo;
            </p>
          </div>
        </div>

        {/* Right: Cream Spec Sheet Table Card */}
        <div className="about-spec-right lg:col-span-7 rounded-3xl bg-[#FBF8EF] border-2 border-[#3E1F1B] p-6 sm:p-8 shadow-badge flex flex-col justify-between">
          <div>
            {/* Spec Sheet Header */}
            <div className="flex items-center justify-between border-b-2 border-[#3E1F1B] pb-4 mb-6">
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

            {/* Spec Rows */}
            <div className="divide-y divide-[#3E1F1B]/15 font-mono text-xs">
              {specRows.map((row) => (
                <div key={row.label} className="py-3 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
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

          {/* Proven Stats Summary Row */}
          <div className="mt-8 pt-5 border-t-2 border-[#3E1F1B] grid grid-cols-2 sm:grid-cols-4 gap-3">
            {keyStats.map((stat) => (
              <div key={stat.id} className="p-3 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/15 text-center">
                <span className="font-serif font-black text-2xl text-[#3E1F1B] block">
                  {stat.value}
                </span>
                <span className="font-serif text-[10px] uppercase tracking-wider text-[#B08A4A] font-bold block mt-0.5">
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
