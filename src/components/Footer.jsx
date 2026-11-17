import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050609] pt-16 pb-12 px-4 sm:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Tier: Monogram, Mission & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-white/10 flex items-center justify-center font-display font-extrabold text-[#00f5a0] text-lg shadow-inner">
              HP
            </div>
            <div>
              <p className="font-display font-bold text-lg text-white">
                {personalInfo.name}
              </p>
              <p className="font-mono text-xs text-slate-400">
                Software Engineer &bull; Full-Stack &amp; IoT
              </p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-3 rounded-2xl bg-surface-1 border border-white/10 hover:border-[#00f5a0]/40 text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span className="font-mono text-xs font-medium">BACK TO TOP</span>
            <div className="w-7 h-7 rounded-lg bg-[#00f5a0]/10 flex items-center justify-center group-hover:bg-[#00f5a0] transition-colors">
              <ArrowUp className="w-4 h-4 text-[#00f5a0] group-hover:text-[#07080b] transition-colors" />
            </div>
          </button>
        </div>

        {/* Middle Tier: Navigation Links & Social Channels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          <div>
            <p className="text-slate-400 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#hero" className="hover:text-[#00f5a0] transition-colors">
                  01 / Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00f5a0] transition-colors">
                  02 / About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#00f5a0] transition-colors">
                  03 / Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#00f5a0] transition-colors">
                  04 / Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-slate-400 uppercase tracking-widest mb-4">Credentials</p>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#skills" className="hover:text-[#00f5a0] transition-colors">
                  05 / Skills &amp; Stack
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#00f5a0] transition-colors">
                  06 / Education
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#00f5a0] transition-colors">
                  07 / Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00f5a0] transition-colors">
                  08 / Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-slate-400 uppercase tracking-widest mb-4">Featured Work</p>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a
                  href="https://pet-boarding-hql3.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f5a0] transition-colors"
                >
                  Pet-Boarding App &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://stitch-noor-mern.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f5a0] transition-colors"
                >
                  Stitch Noor MERN &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://blossom-planner.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f5a0] transition-colors"
                >
                  Blossom Planner &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://gift-shoppp.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f5a0] transition-colors"
                >
                  Gift Shop React &rarr;
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-slate-400 uppercase tracking-widest mb-4">Connect</p>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f5a0] transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f5a0] transition-colors"
                >
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-[#00f5a0] transition-colors"
                >
                  himanipatel.riya@gmail.com
                </a>
              </li>
              <li className="text-slate-400">{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Meta */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Himani Patel. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Built with React, Vite, GSAP &amp; Lenis</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
