import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Sparkles, Heart, Star, Terminal } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Animate percentage
    tl.to(counter, {
      val: 100,
      duration: 1.4,
      ease: 'power2.out',
      onUpdate: () => setPercent(Math.floor(counter.val)),
    });

    // Pop stickers in with bounce
    tl.fromTo(
      '.preloader-sticker',
      { scale: 0, rotation: -25, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(2)' },
      '-=1.0'
    );

    // Fade and wipe preloader up
    tl.to('.preloader-window', {
      scale: 0.9,
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in',
    }, '+=0.2');

    tl.to('.preloader-overlay', {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.3,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      role="alert"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="preloader-overlay fixed inset-0 z-[99999] bg-[#E9E7CB] flex items-center justify-center p-4 paper-grain select-none"
    >
      {/* Floating Retro Stickers Background */}
      <div className="absolute top-12 left-12 preloader-sticker text-3xl animate-float-slow select-none">
        🌸
      </div>
      <div className="absolute top-16 right-16 preloader-sticker text-3xl animate-float-gentle select-none">
        ⭐
      </div>
      <div className="absolute bottom-16 left-20 preloader-sticker text-3xl animate-float-slow select-none">
        💖
      </div>
      <div className="absolute bottom-12 right-20 preloader-sticker text-3xl animate-float-gentle select-none">
        ✨
      </div>

      {/* Main Retro Windows 98 Boot Dialog */}
      <div className="preloader-window relative max-w-md w-full bg-[#FBF8EF] border-2 border-[#1E1B18] rounded-2xl shadow-retro-lg overflow-hidden">
        {/* Title Bar */}
        <div className="window-titlebar px-3 py-2 flex items-center justify-between text-white border-b-2 border-[#1E1B18]">
          <div className="flex items-center gap-2">
            <span className="text-sm">💾</span>
            <span className="font-pixel text-xs text-[#FBF8EF] tracking-wider uppercase font-bold">
              BOOT://Himani_OS_v2.0.exe
            </span>
          </div>
          <span className="font-pixel text-[10px] bg-[#E0147E] px-2 py-0.5 rounded text-white border border-[#1E1B18]">
            INIT
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col items-center text-center">
          {/* Scrapbook Tape on top */}
          <div className="washi-tape washi-tape-gingham -top-3 left-1/2 -translate-x-1/2 w-28 -rotate-2" />

          {/* Heading */}
          <p className="font-script text-3xl text-[#E0147E] mb-1">
            Welcome to the scrapbook of
          </p>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-[#5A0B16] tracking-tight mb-2">
            Himani Patel
          </h1>
          <p className="font-mono text-xs text-[#1E1B18]/70 tracking-widest uppercase mb-6">
            Software Engineer &bull; Full-Stack &amp; IoT
          </p>

          {/* Retro Segmented Loading Bar */}
          <div className="w-full bg-[#E9E7CB] border-2 border-[#1E1B18] p-1.5 rounded-lg shadow-inner mb-4">
            <div className="h-4 sm:h-5 bg-[#E9E7CB] flex gap-1 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => {
                const isFilled = i / 20 <= percent / 100;
                return (
                  <div
                    key={i}
                    className={`flex-1 transition-colors duration-75 rounded-sm ${
                      isFilled
                        ? 'bg-gradient-to-b from-[#F06EAF] to-[#E0147E] border border-[#5A0B16]'
                        : 'bg-transparent'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Counter details */}
          <div className="w-full flex items-center justify-between font-pixel text-[10px] sm:text-xs text-[#1E1B18]/80">
            <span>LOADING ASSETS...</span>
            <span className="text-[#E0147E] font-bold">{percent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
