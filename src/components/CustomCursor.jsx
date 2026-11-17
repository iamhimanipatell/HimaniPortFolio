import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState('arrow'); // 'arrow' | 'hand' | 'pencil'
  const [isVisible, setIsVisible] = useState(false);
  const sparklesContainerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.08, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.08, ease: 'power3' });

    let lastSparkleTime = 0;

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);

      // Create sparkle trail intermittently
      const now = Date.now();
      if (now - lastSparkleTime > 120 && sparklesContainerRef.current) {
        lastSparkleTime = now;
        spawnSparkle(e.clientX, e.clientY);
      }
    };

    const spawnSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      const icons = ['✨', '🌸', '⭐', '💖'];
      sparkle.innerText = icons[Math.floor(Math.random() * icons.length)];
      sparkle.className = 'sparkle-particle pointer-events-none fixed select-none text-xs z-[99998]';
      sparkle.style.left = `${x + (Math.random() * 16 - 8)}px`;
      sparkle.style.top = `${y + (Math.random() * 16 - 8)}px`;
      sparklesContainerRef.current.appendChild(sparkle);

      gsap.to(sparkle, {
        y: -25,
        opacity: 0,
        scale: 0.5,
        duration: 0.7,
        ease: 'power1.out',
        onComplete: () => sparkle.remove(),
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a, button, [role="button"], input, textarea')) {
        setCursorType('hand');
      } else if (target.closest('.cursor-pencil, [data-cursor="pencil"]')) {
        setCursorType('pencil');
      } else {
        setCursorType('arrow');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={sparklesContainerRef} />
      <div
        ref={cursorRef}
        className={`cursor-pixel transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ left: 0, top: 0 }}
      >
        {cursorType === 'hand' ? (
          // Cute Retro Pixel Pointer Hand
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-[2px_2px_0px_#1E1B18]">
            <path
              d="M7 2V12M7 12V18C7 19.1 7.9 20 9 20H15C16.1 20 17 19.1 17 18V9.5C17 8.7 16.3 8 15.5 8C14.7 8 14 8.7 14 9.5V11M14 11V7.5C14 6.7 13.3 6 12.5 6C11.7 6 11 6.7 11 7.5V11M11 11V3.5C11 2.7 10.3 2 9.5 2C8.7 2 8 2.7 8 3.5V11M7 12L4 9"
              stroke="#1E1B18"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#F06EAF"
            />
          </svg>
        ) : cursorType === 'pencil' ? (
          // Retro Pixel Pencil
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-[2px_2px_0px_#1E1B18]">
            <path d="M17 3L21 7L7 21H3V17L17 3Z" fill="#8A9A2B" stroke="#1E1B18" strokeWidth="2" />
            <path d="M14 6L18 10" stroke="#1E1B18" strokeWidth="2" />
          </svg>
        ) : (
          // Retro Pixel OS Arrow
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-[2px_2px_0px_#1E1B18]">
            <path
              d="M3 2L3 20L8 16L12 22L15 20L11 14L18 14L3 2Z"
              fill="#FBF8EF"
              stroke="#1E1B18"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </>
  );
}
