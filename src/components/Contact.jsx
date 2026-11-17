import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Copy, Check, ArrowUpRight, Github, Linkedin, Send, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from('.contact-editorial-panel', {
        scrollTrigger: {
          trigger: '.contact-editorial-container',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto z-10 w-full"
    >
      <div className="contact-editorial-container contact-editorial-panel rounded-3xl bg-brown-pinstripe text-[#F6F0DC] p-6 sm:p-10 lg:p-14 border-2 border-[#3E1F1B] shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Portrait in Rounded Arch Frame + Headlines + Socials */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Rounded Arch Photo Frame */}
            <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#B08A4A] bg-[#F6F0DC] p-1.5 shadow-xl mb-6">
              <div className="w-full h-full rounded-t-full rounded-b-xl overflow-hidden">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Headline with Serif & Overlapping Script */}
            <div className="mb-4">
              <span className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold block mb-1">
                GET IN TOUCH &bull; OPEN FOR ROLES
              </span>
              <h2 className="font-serif font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                LET'S CONNECT &amp;{' '}
                <span className="font-script text-4xl sm:text-6xl text-[#F7C8DA] block sm:inline">
                  Collaborate!
                </span>
              </h2>
            </div>

            <p className="font-mono text-xs sm:text-sm text-[#F6F0DC]/85 leading-relaxed max-w-sm mb-6">
              Open to full-stack engineering opportunities, IoT systems development, and high-impact software product teams.
            </p>

            {/* Direct Email Pill with Copy Button */}
            <div className="p-3.5 rounded-2xl bg-[#4A2722] border border-[#B08A4A]/30 flex items-center justify-between gap-3 w-full max-w-sm mb-6">
              <div className="truncate text-left min-w-0">
                <span className="font-serif text-[9px] uppercase tracking-wider text-[#B08A4A] block font-bold">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-mono text-xs sm:text-sm text-white font-bold hover:text-[#F7C8DA] truncate block"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-xl bg-[#3E1F1B] border border-[#B08A4A]/40 text-[#F7C8DA] hover:bg-[#B08A4A] hover:text-[#3E1F1B] transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-[#E3DAA0]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Round Icon Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#4A2722] border border-[#B08A4A]/40 flex items-center justify-center text-[#F7C8DA] hover:bg-[#F7C8DA] hover:text-[#3E1F1B] transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#4A2722] border border-[#B08A4A]/40 flex items-center justify-center text-[#F7C8DA] hover:bg-[#F7C8DA] hover:text-[#3E1F1B] transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7C8DA] text-[#3E1F1B] font-serif text-xs font-bold uppercase tracking-wider border border-white hover:bg-[#EEB1C7] active:scale-95 transition-all shadow-md"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail Client</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer in Cream Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#FBF8EF] text-[#2B1512] p-6 sm:p-8 border border-[#B08A4A]/30 shadow-badge">
            <div className="flex items-center justify-between border-b border-[#3E1F1B]/15 pb-3 mb-5">
              <span className="font-serif text-[11px] uppercase tracking-widest text-[#B08A4A] font-bold">
                COMMUNICATION DISPATCH
              </span>
              <span className="font-script text-base text-[#3E1F1B]">direct inquiry &hearts;</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 border-b border-[#3E1F1B]/15 pb-2.5">
                <span className="w-20 font-serif font-bold text-[#3E1F1B] text-xs uppercase shrink-0">
                  RECIPIENT:
                </span>
                <span className="font-semibold text-[#3E1F1B]">{personalInfo.email}</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 border-b border-[#3E1F1B]/15 pb-2.5">
                <label htmlFor="editorial-contact-name" className="w-20 font-serif font-bold text-[#3E1F1B] text-xs uppercase shrink-0">
                  YOUR NAME:
                </label>
                <input
                  id="editorial-contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hiring Manager / Recruiter"
                  className="w-full bg-transparent text-[#3E1F1B] placeholder-[#2B1512]/40 focus:outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 border-b border-[#3E1F1B]/15 pb-2.5">
                <label htmlFor="editorial-contact-email" className="w-20 font-serif font-bold text-[#3E1F1B] text-xs uppercase shrink-0">
                  REPLY EMAIL:
                </label>
                <input
                  id="editorial-contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@company.com"
                  className="w-full bg-transparent text-[#3E1F1B] placeholder-[#2B1512]/40 focus:outline-none"
                />
              </div>

              <div className="pt-1">
                <label htmlFor="editorial-contact-msg" className="block font-serif font-bold text-[#3E1F1B] text-xs uppercase mb-1.5">
                  MESSAGE SCOPE:
                </label>
                <textarea
                  id="editorial-contact-msg"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your team, tech stack, or engineering project..."
                  className="w-full p-3 rounded-2xl bg-[#F6F0DC] border border-[#3E1F1B]/20 text-[#3E1F1B] placeholder-[#2B1512]/40 focus:outline-none focus:border-[#B08A4A] resize-none text-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#3E1F1B] text-[#F6F0DC] font-serif font-bold text-xs sm:text-sm uppercase tracking-wider border border-[#B08A4A] shadow-md hover:bg-[#4A2722] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-[#F7C8DA]" />
                      <span>OPENING MAIL CLIENT...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT DISPATCH (MAILTO)</span>
                      <Send className="w-4 h-4 text-[#F7C8DA]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
