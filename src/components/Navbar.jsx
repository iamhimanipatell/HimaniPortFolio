import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Menu, X, ArrowUpRight, Heart, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', subtitle: '00', href: '#hero' },
  { label: 'About', subtitle: '01', href: '#about' },
  { label: 'Projects', subtitle: '02', href: '#projects' },
  { label: 'Skills', subtitle: '03', href: '#skills' },
  { label: 'Timeline', subtitle: '04', href: '#experience' },
  { label: 'Education', subtitle: '05', href: '#education' },
  { label: 'Contact', subtitle: '06', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 w-full z-50 px-3 sm:px-6 pointer-events-none">
      <nav
        aria-label="Retro Scrapbook Navigation"
        className="mx-auto max-w-5xl rounded-full bg-[#5A0B16] text-[#FBF8EF] border-2 border-[#1E1B18] shadow-retro-lg px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto transition-transform duration-300"
      >
        {/* Left: Home Icon Button */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded-full bg-[#7A1020] border border-[#F06EAF]/40 flex items-center justify-center text-[#F06EAF] group-hover:bg-[#E0147E] group-hover:text-white transition-all shadow-sm">
            <Home className="w-4 h-4" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-serif font-bold text-sm tracking-tight text-[#FBF8EF] leading-none">
              {personalInfo.name}
            </span>
            <span className="font-pixel text-[9px] text-[#F06EAF] uppercase tracking-wider mt-0.5">
              Scrapbook v2.0
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links with Subtitles */}
        <ul className="hidden md:flex items-center gap-1 bg-[#3D070E]/80 px-2 py-1 rounded-full border border-white/10">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex flex-col items-center px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F06EAF] text-[#1E1B18] font-bold shadow-retro-sm'
                      : 'text-[#FBF8EF]/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="leading-tight font-medium">{item.label}</span>
                  <span className={`text-[9px] font-mono leading-none ${isActive ? 'text-[#5A0B16]' : 'text-[#F06EAF]'}`}>
                    /{item.subtitle}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: Quick CTA / Sparkle Action */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#8A9A2B] text-[#FBF8EF] font-pixel text-[11px] border border-[#1E1B18] shadow-[2px_2px_0px_#1E1B18] hover:bg-[#6E7B21] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <span>Say Hello</span>
            <Sparkles className="w-3 h-3 text-[#7DF3FF]" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full bg-[#7A1020] text-[#FBF8EF] border border-[#F06EAF]/40 hover:bg-[#E0147E] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Styled Like a Retro Sticky Notepad */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-sm bg-[#FBF8EF] border-2 border-[#1E1B18] rounded-2xl p-5 shadow-retro-lg pointer-events-auto relative">
          <div className="washi-tape washi-tape-gingham -top-3 left-1/2 -translate-x-1/2 w-28 -rotate-1" />
          <div className="flex items-center justify-between border-b border-[#1E1B18]/10 pb-2 mb-3">
            <span className="font-pixel text-[10px] text-[#8A9A2B]">NAVIGATION.EXE</span>
            <span className="font-hand text-sm text-[#E0147E]">choose a page ✨</span>
          </div>

          <ul className="flex flex-col gap-1.5 mb-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-mono transition-all ${
                      isActive
                        ? 'bg-[#F06EAF] text-[#1E1B18] font-bold border border-[#1E1B18]'
                        : 'text-[#1E1B18] hover:bg-[#E9E7CB]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs opacity-60">/{item.subtitle}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#E0147E] text-white font-pixel text-xs border-2 border-[#1E1B18] shadow-retro"
          >
            <span>Let's Talk &bull; Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
