import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t-2 border-[#3E1F1B] bg-[#2B1512] text-[#F6F0DC] pt-16 pb-12 px-4 sm:px-8 z-10 paper-grain">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top Tier: Monogram & Back to Top Tape Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#F6F0DC]/15">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#3E1F1B] border-2 border-[#B08A4A] flex items-center justify-center font-serif text-lg font-bold text-[#F7C8DA] shadow-md">
              HP
            </div>
            <div>
              <p className="font-serif font-black text-xl text-[#F6F0DC]">
                {personalInfo.name}
              </p>
              <p className="font-script text-base text-[#B08A4A]">
                Software Engineer &bull; Full-Stack &amp; IoT
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F0DC] text-[#3E1F1B] font-serif text-xs font-bold uppercase tracking-wider border border-[#B08A4A] shadow-md hover:bg-[#F7C8DA] active:scale-95 transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Middle Tier: Grid of Sections & Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <p className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold mb-3">
              DIRECTORY
            </p>
            <ul className="space-y-2 text-[#F6F0DC]/80">
              <li><a href="#hero" className="hover:text-[#F7C8DA] transition-colors">&gt; Home // ID Badge</a></li>
              <li><a href="#why-me" className="hover:text-[#F7C8DA] transition-colors">&gt; Why Work With Me</a></li>
              <li><a href="#about" className="hover:text-[#F7C8DA] transition-colors">&gt; Profile &amp; Bio</a></li>
              <li><a href="#services" className="hover:text-[#F7C8DA] transition-colors">&gt; Capabilities</a></li>
            </ul>
          </div>

          <div>
            <p className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold mb-3">
              ARCHIVES
            </p>
            <ul className="space-y-2 text-[#F6F0DC]/80">
              <li><a href="#projects" className="hover:text-[#F7C8DA] transition-colors">&gt; Case Studies</a></li>
              <li><a href="#skills" className="hover:text-[#F7C8DA] transition-colors">&gt; Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-[#F7C8DA] transition-colors">&gt; Experience Log</a></li>
              <li><a href="#education" className="hover:text-[#F7C8DA] transition-colors">&gt; Academic Rigor</a></li>
            </ul>
          </div>

          <div>
            <p className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold mb-3">
              FEATURED WORKS
            </p>
            <ul className="space-y-2 text-[#F6F0DC]/80">
              <li><a href="https://pet-boarding-hql3.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C8DA] transition-colors">&gt; Pet-Boarding App</a></li>
              <li><a href="https://stitch-noor-mern.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C8DA] transition-colors">&gt; Stitch Noor MERN</a></li>
              <li><a href="https://blossom-planner.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C8DA] transition-colors">&gt; Blossom Planner</a></li>
              <li><a href="https://gift-shoppp.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C8DA] transition-colors">&gt; Gift Shop React</a></li>
            </ul>
          </div>

          <div>
            <p className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold mb-3">
              DIRECT REACH
            </p>
            <ul className="space-y-2 text-[#F6F0DC]/80">
              <li><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C8DA] transition-colors">&gt; LinkedIn Profile</a></li>
              <li><a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#F7C8DA] transition-colors">&gt; GitHub Code</a></li>
              <li><a href={`mailto:${personalInfo.email}`} className="hover:text-[#F7C8DA] transition-colors">&gt; {personalInfo.email}</a></li>
              <li className="text-[#B08A4A]">&gt; {personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Monospace Scrapbook Tagline */}
        <div className="pt-6 border-t border-[#F6F0DC]/15 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#F6F0DC]/70">
          <p className="font-serif text-xs">
            /// @himanipatel &mdash; software engineer editorial media kit
          </p>
          <p className="flex items-center gap-1.5 text-xs">
            <span>Built with React + Vite + Tailwind + GSAP + Lenis</span>
            <span className="text-[#F7C8DA]">&hearts;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
