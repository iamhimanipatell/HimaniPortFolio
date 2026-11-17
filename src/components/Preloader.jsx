import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

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

    tl.to(counter, {
      val: 100,
      duration: 0.55,
      ease: 'power2.out',
      onUpdate: () => setPercent(Math.floor(counter.val)),
    });

    tl.to('.preloader-card', {
      scale: 0.95,
      y: -20,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
    }, '+=0.05');

    tl.to('.preloader-backdrop', {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.2,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      role="alert"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="preloader-backdrop fixed inset-0 z-[99999] bg-[#F6F0DC] flex items-center justify-center p-4 bg-grid-paper select-none"
    >
      {/* Main Preloader Card */}
      <div className="preloader-card relative max-w-sm w-full bg-[#FBF8EF] border-2 border-[#3E1F1B] rounded-3xl p-6 sm:p-8 shadow-badge text-center">
        {/* Washi tape on top */}
        <div className="washi-tape-strip washi-pink-gingham -top-2.5 left-1/2 -translate-x-1/2 w-28 -rotate-1" />

        <h1 className="font-serif font-black text-3xl sm:text-4xl text-[#3E1F1B] mt-2 mb-0.5">
          Himani Patel
        </h1>
        <p className="font-script text-2xl text-[#B08A4A] mb-6">
          Software Engineer
        </p>

        {/* Progress Bar in Chocolate Brown & Gold */}
        <div className="w-full bg-[#F6F0DC] border border-[#3E1F1B]/20 rounded-full p-1 mb-3 shadow-inner">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-[#B08A4A] via-[#E3DAA0] to-[#3E1F1B] transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="flex items-center justify-center font-mono text-xs text-[#2B1512]/70 tracking-widest uppercase">
          <span>INITIALIZING</span>
        </div>
      </div>
    </div>
  );
}
