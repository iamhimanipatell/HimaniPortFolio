import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Copy, Check, ArrowUpRight, Github, Linkedin, Send, Sparkles } from 'lucide-react';
import RetroWindow from './RetroWindow';
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
      gsap.from('.contact-retro-content', {
        scrollTrigger: {
          trigger: '.contact-retro-content',
          start: 'top 85%',
        },
        y: 40,
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
      className="relative py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Decorative Scrapbook Sticky Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-pixel text-xs text-[#E0147E] bg-[#D9C7A0] px-3 py-1 rounded-full border-2 border-[#1E1B18] shadow-retro-sm">
          // SECTION 06
        </span>
        <span className="font-hand text-2xl text-[#5A0B16] font-bold">
          send a postcard or an email 💌
        </span>
      </div>

      <RetroWindow
        title="compose_message.exe - Outlook Express '98"
        icon="✉️"
        showToolbar={true}
        initialRotation={-0.2}
      >
        <div className="contact-retro-content grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Info & Social Profiles */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#D9C7A0]/60 border-2 border-[#1E1B18] shadow-retro-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-pixel text-[10px] text-[#8A9A2B] uppercase font-bold">
                  DIRECT CHANNELS
                </span>
                <span className="text-xs">🌸</span>
              </div>

              <h4 className="font-serif font-black text-2xl sm:text-3xl text-[#5A0B16] mb-3">
                Let's Build Something Memorable.
              </h4>

              <p className="font-mono text-xs sm:text-sm text-[#1E1B18]/85 leading-relaxed mb-6">
                I'm actively seeking high-impact full-stack and software engineering opportunities. Drop me a note!
              </p>

              {/* Direct Info List */}
              <div className="space-y-3 mb-6">
                {/* Email with Copy */}
                <div className="p-3.5 rounded-xl bg-[#FBF8EF] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] flex items-center justify-between gap-2">
                  <div className="truncate">
                    <span className="font-pixel text-[9px] text-[#E0147E] block uppercase">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-xs sm:text-sm text-[#5A0B16] font-bold hover:text-[#E0147E] truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-[#E9E7CB] border border-[#1E1B18] hover:bg-[#F06EAF] hover:text-white transition-colors shrink-0"
                    title="Copy email"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#8A9A2B]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Work Mode & Availability */}
                <div className="p-3.5 rounded-xl bg-[#FBF8EF] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#8A9A2B]/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#8A9A2B]" />
                  </div>
                  <div>
                    <span className="font-pixel text-[9px] text-[#8A9A2B] block uppercase">
                      AVAILABILITY
                    </span>
                    <p className="font-mono text-xs sm:text-sm text-[#1E1B18] font-bold">
                      Open for Full-Stack Roles (Hybrid &bull; Remote)
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-[#FBF8EF] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E0147E]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#E0147E]" />
                  </div>
                  <div>
                    <span className="font-pixel text-[9px] text-[#E0147E] block uppercase">
                      BASE LOCATION
                    </span>
                    <p className="font-mono text-xs sm:text-sm text-[#1E1B18] font-bold">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t-2 border-dashed border-[#1E1B18]/15 flex flex-wrap gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBF8EF] text-[#1E1B18] font-mono text-xs font-bold border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] hover:bg-[#F06EAF] hover:text-white transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBF8EF] text-[#1E1B18] font-mono text-xs font-bold border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] hover:bg-[#8A9A2B] hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E0147E] text-white font-mono text-xs font-bold border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] hover:bg-[#F06EAF] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Mail</span>
              </a>
            </div>
          </div>

          {/* Right Column: Retro Email Form */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-[#FBF8EF] border-2 border-[#1E1B18] shadow-retro-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#1E1B18]">
              <span className="font-pixel text-xs text-[#5A0B16] font-bold">
                NEW_MESSAGE://DRAFT.TXT
              </span>
              <span className="font-hand text-base text-[#8A9A2B] font-bold">
                instant response guaranteed 🌸
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="flex items-center gap-2 border-b border-[#1E1B18]/15 pb-2">
                <span className="w-16 text-[#5A0B16] font-bold">TO:</span>
                <span className="font-semibold text-[#1E1B18]">{personalInfo.email}</span>
              </div>

              <div className="flex items-center gap-2 border-b border-[#1E1B18]/15 pb-2">
                <label htmlFor="contact-name" className="w-16 text-[#5A0B16] font-bold">
                  FROM:
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name / Organization"
                  className="w-full bg-transparent text-[#1E1B18] placeholder-[#1E1B18]/40 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 border-b border-[#1E1B18]/15 pb-2">
                <label htmlFor="contact-email" className="w-16 text-[#5A0B16] font-bold">
                  REPLY-TO:
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full bg-transparent text-[#1E1B18] placeholder-[#1E1B18]/40 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <label htmlFor="contact-message" className="block text-[#5A0B16] font-bold mb-1.5">
                  MESSAGE BODY:
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write a note about an opportunity, tech stack, or collaboration..."
                  className="w-full p-3 rounded-xl bg-[#E9E7CB]/60 border border-[#1E1B18] text-[#1E1B18] placeholder-[#1E1B18]/40 focus:outline-none focus:border-[#E0147E] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#E0147E] text-white font-pixel text-xs sm:text-sm border-2 border-[#1E1B18] shadow-retro hover:bg-[#F06EAF] hover:text-[#1E1B18] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>OPENING MAIL CLIENT...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE (MAILTO)</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
}
