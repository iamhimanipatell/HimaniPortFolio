import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.contact-header', {
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.contact-card-left', {
        scrollTrigger: {
          trigger: '.contact-wrapper',
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.contact-card-right', {
        scrollTrigger: {
          trigger: '.contact-wrapper',
          start: 'top 80%',
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user's mail client with prefilled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Section Header */}
      <div className="contact-header flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f5a0] tracking-widest uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00f5a0]" />
          <span>06 / GET IN TOUCH</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
          Let's Engineer Something <br />
          <span className="text-[#00f5a0]">Remarkable Together.</span>
        </h2>
      </div>

      <div className="contact-wrapper grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact & Socials */}
        <div className="contact-card-left lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-surface-1/90 border border-white/10 shadow-2xl">
          <div>
            <span className="text-xs font-mono text-[#00d8f6] tracking-wider uppercase block mb-3">
              Direct Communication
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
              Open for High-Impact Software Engineering Roles.
            </h3>
            <p className="text-sm text-slate-300/90 leading-relaxed mb-8">
              Whether you have an upcoming project, an engineering opening, or want to discuss full-stack &amp; IoT architecture, my inbox is always open.
            </p>

            {/* Direct Information Blocks */}
            <div className="space-y-4 mb-8">
              {/* Email with copy button */}
              <div className="p-4 rounded-2xl bg-surface-2/80 border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#00f5a0]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#00f5a0]" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono uppercase text-slate-400">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-[#00f5a0] truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-[#00f5a0]/20 text-slate-300 hover:text-[#00f5a0] transition-colors shrink-0"
                  aria-label="Copy Email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-[#00f5a0]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-surface-2/80 border border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#00d8f6]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#00d8f6]" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-mono text-white hover:text-[#00d8f6]"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-surface-2/80 border border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">Location</p>
                  <p className="text-xs sm:text-sm font-mono text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-white/5">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Profiles &amp; Repositories
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#00f5a0] text-slate-300 hover:text-[#07080b] font-mono text-xs border border-white/5 hover:border-[#00f5a0] transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#00f5a0] text-slate-300 hover:text-[#07080b] font-mono text-xs border border-white/5 hover:border-[#00f5a0] transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00f5a0]/15 text-[#00f5a0] font-mono text-xs border border-[#00f5a0]/30 hover:bg-[#00f5a0] hover:text-[#07080b] transition-all duration-200"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Mailto Client</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="contact-card-right lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-surface-1/90 border border-white/10 shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-slate-400 mb-8">
              Fill out the form below to automatically draft a direct communication inquiry.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Your Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe / Tech Recruiter"
                  className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00f5a0] focus:ring-1 focus:ring-[#00f5a0] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00f5a0] focus:ring-1 focus:ring-[#00f5a0] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase mb-2">
                  Project / Opportunity Scope
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, tech stack, or engineering project..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00f5a0] focus:ring-1 focus:ring-[#00f5a0] transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#00f5a0] text-[#07080b] font-display font-bold text-sm tracking-wide hover:bg-[#00df90] hover:shadow-[0_0_25px_rgba(0,245,160,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {formSubmitted ? (
                    <>
                      <Check className="w-4 h-4 text-[#07080b]" />
                      <span>Opening Mail Client...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message (Mailto)</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          <p className="text-[11px] font-mono text-slate-500 text-center mt-6">
            Direct response guaranteed within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
