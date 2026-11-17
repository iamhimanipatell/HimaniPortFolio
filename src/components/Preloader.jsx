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

    const counterObj = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Animate percentage counter
    tl.to(counterObj, {
      value: 100,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: () => {
        setPercent(Math.floor(counterObj.value));
      },
    });

    // Reveal text
    tl.fromTo(
      '.preloader-text span',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
      '-=1.2'
    );

    // Slide up shutter panels
    tl.to('.preloader-curtain-top', {
      yPercent: -100,
      duration: 0.9,
      ease: 'expo.inOut',
    }, '+=0.2');

    tl.to('.preloader-curtain-bottom', {
      yPercent: 100,
      duration: 0.9,
      ease: 'expo.inOut',
    }, '<');

    tl.to('.preloader-container', {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.3,
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <aside
      aria-label="Loading portfolio"
      className="preloader-container fixed inset-0 z-[9999] flex flex-col justify-center items-center pointer-events-auto select-none overflow-hidden"
    >
      {/* Split background curtains */}
      <div className="preloader-curtain-top absolute top-0 left-0 w-full h-1/2 bg-[#050608] border-b border-white/5 z-0" />
      <div className="preloader-curtain-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#050608] border-t border-white/5 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Name Reveal */}
        <div className="overflow-hidden mb-3">
          <h1 className="preloader-text text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
            <span className="inline-block">HIMANI</span>{' '}
            <span className="inline-block text-[#00f5a0]">PATEL</span>
          </h1>
        </div>

        <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-400 mb-8">
          Software Engineer &bull; Full-Stack &amp; IoT
        </p>

        {/* Progress Bar & Counter */}
        <div className="w-56 sm:w-72 flex flex-col gap-2">
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00f5a0] to-[#00d8f6] transition-all duration-75"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-xs font-mono text-slate-500">
            <span>INITIALIZING</span>
            <span className="text-[#00f5a0] font-semibold">{percent}%</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
