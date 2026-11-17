import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (no touch)
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasCoarsePointer || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Center elements on cursor coordinates
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // Use GSAP quickTo for silky 60fps tracking
    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' });
    const xToRing = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power2.out' });
    const yToRing = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Attach listeners for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const projectCard = target.closest('[data-cursor-project]');
      const interactiveEl = target.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-interactive'
      );

      if (projectCard) {
        setIsHovered(true);
        setIsPointer(true);
        setCursorText('VIEW');
      } else if (interactiveEl) {
        setIsPointer(true);
        setIsHovered(false);
        setCursorText('');
      } else {
        setIsPointer(false);
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Don't render for touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`cursor-dot fixed pointer-events-none z-[9999] rounded-full transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovered ? 'w-0 h-0 opacity-0' : isPointer ? 'w-2 h-2 bg-[#00f5a0]' : 'w-2 h-2 bg-[#00f5a0]'}`}
        style={{ left: 0, top: 0 }}
      />

      {/* Outer Ring / Follower */}
      <div
        ref={ringRef}
        className={`cursor-ring fixed pointer-events-none z-[9998] flex items-center justify-center rounded-full transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isHovered
            ? 'w-20 h-20 bg-[#00f5a0] text-[#07080b] border-transparent font-display font-bold text-xs tracking-wider shadow-lg shadow-[#00f5a0]/40'
            : isPointer
            ? 'w-12 h-12 border-[#00f5a0] bg-[#00f5a0]/10 scale-110'
            : 'w-8 h-8 border-[#00f5a0]/40 bg-transparent'
        }`}
        style={{ left: 0, top: 0 }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] tracking-widest font-extrabold uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
