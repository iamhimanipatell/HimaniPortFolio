import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#3E1F1B] bg-[#2B1512] text-[#F6F0DC] py-5 sm:py-6 px-4 sm:px-8 z-10 paper-grain">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        {/* Left: Clean Monogram & Copyright */}
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full bg-[#3E1F1B] border border-[#B08A4A]/50 flex items-center justify-center font-serif text-xs font-bold text-[#F7C8DA]">
            HP
          </span>
          <p className="text-[#F6F0DC]/80 font-serif text-xs">
            &copy; {new Date().getFullYear()} {personalInfo.name} &bull; Software Engineer
          </p>
        </div>

        {/* Right: Quick Socials & Minimal Back-to-Top Button */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F6F0DC]/70 hover:text-[#F7C8DA] transition-colors p-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F6F0DC]/70 hover:text-[#F7C8DA] transition-colors p-1"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#F6F0DC]/70 hover:text-[#F7C8DA] transition-colors p-1"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <span className="text-[#F6F0DC]/20">|</span>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3E1F1B] text-[#F6F0DC] font-serif text-[11px] uppercase tracking-wider border border-[#B08A4A]/40 hover:bg-[#F7C8DA] hover:text-[#3E1F1B] transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
