import React, { useRef } from 'react';
import gsap from 'gsap';

/**
 * MagneticButton component
 * Gently attracts toward cursor on hover for a tactile, award-winning feel.
 * Automatically respects prefers-reduced-motion and touch screens.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  ...props
}) {
  const magneticRef = useRef(null);

  const handleMouseMove = (e) => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const el = magneticRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    gsap.to(el, {
      x: distanceX,
      y: distanceY,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    const el = magneticRef.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.75,
      ease: 'elastic.out(1.1, 0.4)',
    });
  };

  return (
    <div
      ref={magneticRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
