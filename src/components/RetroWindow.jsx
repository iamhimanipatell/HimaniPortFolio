import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { 
  Minus, Square, X, Paintbrush, Eraser, Type, Sparkles, 
  Palette, MousePointer, ZoomIn, Scissors, Stamp
} from 'lucide-react';

gsap.registerPlugin(Draggable);

export default function RetroWindow({
  title = "untitled.exe",
  icon = "💾",
  children,
  showToolbar = false,
  className = "",
  id = "",
  initialRotation = 0,
}) {
  const windowRef = useRef(null);
  const titleBarRef = useRef(null);
  const [activeTool, setActiveTool] = useState('brush');
  const [shakeToast, setShakeToast] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check viewport size for desktop rotation & drag
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Initialize GSAP Draggable only on Desktop (> 768px)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReducedMotion || !windowRef.current || !titleBarRef.current) return;

    const draggableInstance = Draggable.create(windowRef.current, {
      trigger: titleBarRef.current,
      type: "x,y",
      edgeResistance: 0.7,
      bounds: { minX: -60, maxX: 60, minY: -40, maxY: 80 },
      cursor: "grab",
      activeCursor: "grabbing",
      zIndexBoost: true,
    });

    return () => {
      if (draggableInstance[0]) draggableInstance[0].kill();
    };
  }, [isDesktop]);

  // Playful shake animation when Close button is clicked
  const handleCloseAttempt = (e) => {
    e.stopPropagation();
    if (!windowRef.current) return;

    gsap.timeline()
      .to(windowRef.current, { x: "+=10", duration: 0.06 })
      .to(windowRef.current, { x: "-=20", duration: 0.06 })
      .to(windowRef.current, { x: "+=16", duration: 0.06 })
      .to(windowRef.current, { x: "-=10", duration: 0.06 })
      .to(windowRef.current, { x: 0, duration: 0.08 });

    setShakeToast(true);
    setTimeout(() => setShakeToast(false), 2400);
  };

  const tools = [
    { id: 'brush', icon: Paintbrush, label: 'Brush' },
    { id: 'eraser', icon: Eraser, label: 'Eraser' },
    { id: 'type', icon: Type, label: 'Text' },
    { id: 'stamp', icon: Stamp, label: 'Stamp' },
    { id: 'select', icon: Scissors, label: 'Cut' },
  ];

  return (
    <div
      ref={windowRef}
      id={id}
      className={`relative w-full max-w-full rounded-2xl md:rounded-3xl border-2 border-[#1E1B18] bg-[#FBF8EF] shadow-retro sm:shadow-retro-lg transition-shadow duration-300 ${className}`}
      style={{
        transform: isDesktop && initialRotation ? `rotate(${initialRotation}deg)` : 'none',
      }}
    >
      {/* Title Bar (Draggable Handle on Desktop) */}
      <div
        ref={titleBarRef}
        className="window-titlebar flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-t-[14px] md:rounded-t-[22px] select-none cursor-default md:cursor-grab active:md:cursor-grabbing w-full min-w-0"
      >
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden min-w-0 pr-2">
          <span className="text-sm shrink-0 select-none">{icon}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#FBF8EF] tracking-wider truncate uppercase font-bold drop-shadow-[1px_1px_0px_#1E1B18]">
            {title}
          </span>
        </div>

        {/* Window Control Buttons */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <button
            type="button"
            className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#E9E7CB] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] flex items-center justify-center hover:bg-white active:translate-x-0.5 active:translate-y-0.5 transition-all text-[#1E1B18]"
            aria-label="Minimize window"
          >
            <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" />
          </button>
          <button
            type="button"
            className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#E9E7CB] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] flex items-center justify-center hover:bg-white active:translate-x-0.5 active:translate-y-0.5 transition-all text-[#1E1B18]"
            aria-label="Maximize window"
          >
            <Square className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[2.5]" />
          </button>
          <button
            type="button"
            onClick={handleCloseAttempt}
            className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-[#F06EAF] border border-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] flex items-center justify-center hover:bg-[#E0147E] text-white active:translate-x-0.5 active:translate-y-0.5 transition-all"
            aria-label="Close window"
            title="Cannot close!"
          >
            <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Menu Bar: File Edit View Image Help */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 bg-[#E9E7CB] border-b-2 border-[#1E1B18] text-[10px] sm:text-xs font-mono text-[#1E1B18] select-none overflow-x-auto w-full">
        <div className="flex items-center gap-2.5 sm:gap-5 shrink-0">
          <span className="hover:text-[#E0147E] cursor-pointer">File</span>
          <span className="hover:text-[#E0147E] cursor-pointer">Edit</span>
          <span className="hover:text-[#E0147E] cursor-pointer">View</span>
          <span className="hover:text-[#E0147E] cursor-pointer">Image</span>
          <span className="hover:text-[#E0147E] cursor-pointer">Options</span>
          <span className="hover:text-[#E0147E] cursor-pointer">Help</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-[#8A9A2B] font-bold shrink-0">
          <span>● READY</span>
        </div>
      </div>

      {/* Shake Toast notification */}
      {shakeToast && (
        <div className="absolute top-12 right-2 sm:right-4 z-50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#E0147E] text-white font-mono text-[11px] sm:text-xs border-2 border-[#1E1B18] shadow-retro animate-bounce">
          🌸 Window is locked open for viewing! ✨
        </div>
      )}

      {/* Window Body (Content + Optional Paint Toolbar) */}
      <div className="flex flex-col md:flex-row relative w-full min-w-0">
        {showToolbar && (
          <aside
            aria-label="Retro toolbar"
            className="hidden md:flex flex-col gap-1.5 p-2 bg-[#D9C7A0]/60 border-r-2 border-[#1E1B18] shrink-0"
          >
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTool === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool.id)}
                  title={tool.label}
                  className={`w-7 h-7 rounded flex items-center justify-center border border-[#1E1B18] transition-all ${
                    isActive 
                      ? 'bg-[#E0147E] text-white shadow-inner translate-x-0.5 translate-y-0.5' 
                      : 'bg-[#FBF8EF] text-[#1E1B18] shadow-[1px_1px_0px_#1E1B18] hover:bg-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              );
            })}
          </aside>
        )}

        <div className="flex-grow p-3 sm:p-6 lg:p-8 w-full min-w-0 overflow-hidden">
          {children}
        </div>
      </div>

      {/* Window Status Bar Footer */}
      <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#E9E7CB] border-t-2 border-[#1E1B18] rounded-b-[14px] md:rounded-b-[22px] flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-[#1E1B18]/70 select-none w-full">
        <span>Y2K OS &bull; Responsive Edition</span>
        <span className="font-pixel text-[8px] sm:text-[9px] text-[#8A9A2B]">HIMANI.DLL READY</span>
      </div>
    </div>
  );
}
