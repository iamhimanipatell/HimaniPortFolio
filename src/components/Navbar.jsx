import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
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
    if (window.__lenis) {
      window.__lenis.scrollTo(href, { offset: -40, duration: 1.2 });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          isScrolled
            ? 'bg-[#0b0d13]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f5a0]"
          aria-label="Himani Patel Home"
        >
          <div className="w-9 h-9 rounded-xl bg-surface-2 border border-white/10 flex items-center justify-center font-display font-extrabold text-[#00f5a0] text-sm group-hover:border-[#00f5a0]/50 group-hover:shadow-[0_0_15px_rgba(0,245,160,0.3)] transition-all">
            HP
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-[#00f5a0] transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 bg-[#12151d]/70 px-3 py-1.5 rounded-full border border-white/5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#07080b] font-semibold bg-[#00f5a0] shadow-sm shadow-[#00f5a0]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-xl bg-[#00f5a0]/10 text-[#00f5a0] border border-[#00f5a0]/30 hover:bg-[#00f5a0] hover:text-[#07080b] hover:shadow-[0_0_20px_rgba(0,245,160,0.4)] transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/5 focus:outline-none focus:ring-2 focus:ring-[#00f5a0]"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#00f5a0]" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-[#0c0e14]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-2 mb-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#00f5a0]/15 text-[#00f5a0] font-semibold border border-[#00f5a0]/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00f5a0]" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#00f5a0] text-[#07080b] font-display font-bold text-sm shadow-lg shadow-[#00f5a0]/30"
          >
            <span>Contact Himani</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
