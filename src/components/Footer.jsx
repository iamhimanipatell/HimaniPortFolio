import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t-2 border-[#1E1B18] bg-[#5A0B16] text-[#FBF8EF] pt-14 pb-10 px-4 sm:px-8 z-10 paper-grain">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Top Tier: Monogram & Back to Top Tape Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#FBF8EF]/20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#E0147E] border-2 border-[#FBF8EF] flex items-center justify-center font-serif font-black text-xl text-white shadow-retro-sm">
              HP
            </div>
            <div>
              <p className="font-serif font-black text-xl text-[#FBF8EF]">
                {personalInfo.name}
              </p>
              <p className="font-pixel text-[10px] text-[#F06EAF] uppercase tracking-wider">
                Y2K Retro-Desktop Scrapbook Portfolio
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E9E7CB] text-[#1E1B18] font-pixel text-xs border-2 border-[#1E1B18] shadow-[3px_3px_0px_#F06EAF] hover:bg-[#F06EAF] hover:text-white active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Middle Tier: Grid of Sections & Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <p className="font-pixel text-[10px] text-[#F06EAF] uppercase tracking-wider mb-3 font-bold">
              DIRECTORY
            </p>
            <ul className="space-y-2 text-[#FBF8EF]/80">
              <li><a href="#hero" className="hover:text-[#F06EAF] transition-colors">&gt; 00 // Home</a></li>
              <li><a href="#about" className="hover:text-[#F06EAF] transition-colors">&gt; 01 // About</a></li>
              <li><a href="#projects" className="hover:text-[#F06EAF] transition-colors">&gt; 02 // Projects</a></li>
              <li><a href="#skills" className="hover:text-[#F06EAF] transition-colors">&gt; 03 // Skills</a></li>
            </ul>
          </div>

          <div>
            <p className="font-pixel text-[10px] text-[#F06EAF] uppercase tracking-wider mb-3 font-bold">
              ARCHIVES
            </p>
            <ul className="space-y-2 text-[#FBF8EF]/80">
              <li><a href="#experience" className="hover:text-[#F06EAF] transition-colors">&gt; 04 // Experience</a></li>
              <li><a href="#education" className="hover:text-[#F06EAF] transition-colors">&gt; 05 // Education</a></li>
              <li><a href="#contact" className="hover:text-[#F06EAF] transition-colors">&gt; 06 // Contact</a></li>
              <li><a href="https://pet-boarding-hql3.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F06EAF] transition-colors">&gt; Pet-Boarding App</a></li>
            </ul>
          </div>

          <div>
            <p className="font-pixel text-[10px] text-[#F06EAF] uppercase tracking-wider mb-3 font-bold">
              FEATURED DEMOS
            </p>
            <ul className="space-y-2 text-[#FBF8EF]/80">
              <li><a href="https://stitch-noor-mern.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F06EAF] transition-colors">&gt; Stitch Noor MERN</a></li>
              <li><a href="https://blossom-planner.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F06EAF] transition-colors">&gt; Blossom Planner</a></li>
              <li><a href="https://gift-shoppp.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F06EAF] transition-colors">&gt; Gift Shop React</a></li>
              <li><a href="https://github.com/iamhimanipatell" target="_blank" rel="noopener noreferrer" className="hover:text-[#F06EAF] transition-colors">&gt; GitHub Profile</a></li>
            </ul>
          </div>

          <div>
            <p className="font-pixel text-[10px] text-[#F06EAF] uppercase tracking-wider mb-3 font-bold">
              DIRECT DISPATCH
            </p>
            <ul className="space-y-2 text-[#FBF8EF]/80">
              <li><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#F06EAF] transition-colors">&gt; LinkedIn</a></li>
              <li><a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#F06EAF] transition-colors">&gt; GitHub</a></li>
              <li><a href={`mailto:${personalInfo.email}`} className="hover:text-[#F06EAF] transition-colors">&gt; {personalInfo.email}</a></li>
              <li className="text-[#8A9A2B] font-bold">&gt; {personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Monospace Scrapbook Tagline */}
        <div className="pt-6 border-t border-[#FBF8EF]/20 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#FBF8EF]/70">
          <p className="font-pixel text-[10px]">
            /// @himanipatel &mdash; software engineer scrapbook ver 2.0
          </p>
          <p className="flex items-center gap-1.5 text-xs">
            <span>Built with React + Vite + Tailwind + GSAP + Lenis</span>
            <span className="text-[#F06EAF]">&hearts;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
