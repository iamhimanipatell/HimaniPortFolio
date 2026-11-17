import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', script: 'start', href: '#hero' },
  { label: 'Why Me', script: 'value', href: '#why-me' },
  { label: 'About', script: 'bio', href: '#about' },
  { label: 'Projects', script: 'work', href: '#projects' },
  { label: 'Services', script: 'build', href: '#services' },
  { label: 'Skills', script: 'stack', href: '#skills' },
  { label: 'Experience', script: 'path', href: '#experience' },
  { label: 'Contact', script: 'hello', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 220;

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
        aria-label="Editorial Media Kit Navigation"
        className={`mx-auto max-w-5xl rounded-full transition-all duration-300 px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto border ${
          isScrolled
            ? 'bg-[#FBF8EF]/95 backdrop-blur-md border-[#B08A4A]/40 shadow-card-soft text-[#3E1F1B]'
            : 'bg-[#FBF8EF]/90 backdrop-blur-sm border-[#3E1F1B]/15 text-[#3E1F1B]'
        }`}
      >
        {/* Brand / Name Tag */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          aria-label="Himani Patel Portfolio"
        >
          <div className="w-8 h-8 rounded-full bg-[#3E1F1B] text-[#F6F0DC] border border-[#B08A4A] flex items-center justify-center font-serif text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
            HP
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm tracking-tight text-[#3E1F1B] leading-none">
              Himani Patel
            </span>
            <span className="font-script text-xs text-[#B08A4A] leading-tight">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 bg-[#F6F0DC] px-2 py-1 rounded-full border border-[#B08A4A]/30 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#3E1F1B] text-[#FBF8EF] font-bold shadow-sm'
                      : 'text-[#3E1F1B]/80 hover:text-[#3E1F1B] hover:bg-white/60 font-medium'
                  }`}
                >
                  <span className="font-serif tracking-wide">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F7C8DA] text-[#3E1F1B] font-serif text-xs font-bold border border-[#3E1F1B]/20 shadow-sm hover:bg-[#EEB1C7] active:scale-95 transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full bg-[#F6F0DC] text-[#3E1F1B] border border-[#3E1F1B]/20 hover:bg-[#F7C8DA] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Styled Like an Editorial Notecard */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto w-[calc(100vw-24px)] max-w-sm bg-[#FBF8EF] border-2 border-[#3E1F1B] rounded-3xl p-5 shadow-polaroid pointer-events-auto relative">
          <div className="washi-tape-strip washi-pink-gingham -top-2.5 left-1/2 -translate-x-1/2 w-28 -rotate-1" />

          <div className="flex items-center justify-between border-b border-[#3E1F1B]/15 pb-2.5 mb-3">
            <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#3E1F1B]">
              MEDIA KIT DIRECTORY
            </span>
            <span className="font-script text-base text-[#B08A4A]">select page &hearts;</span>
          </div>

          <ul className="flex flex-col gap-1 mb-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                      isActive
                        ? 'bg-[#3E1F1B] text-[#FBF8EF] font-bold shadow-sm'
                        : 'text-[#3E1F1B] hover:bg-[#F6F0DC]'
                    }`}
                  >
                    <span className="font-serif">{item.label}</span>
                    <span className={`font-script text-sm ${isActive ? 'text-[#F7C8DA]' : 'text-[#B08A4A]'}`}>
                      {item.script}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full bg-[#F7C8DA] text-[#3E1F1B] font-serif font-bold text-xs border border-[#3E1F1B] shadow-sm"
          >
            <span>Collaborate &bull; Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
