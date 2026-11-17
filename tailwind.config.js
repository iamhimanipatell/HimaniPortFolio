/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07080b',
        'surface-1': '#0d0f14',
        'surface-2': '#141720',
        'surface-3': '#1d222e',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-hover': 'rgba(0, 245, 160, 0.4)',
        accent: {
          DEFAULT: '#00f5a0',
          hover: '#00df90',
          muted: 'rgba(0, 245, 160, 0.15)',
          glow: 'rgba(0, 245, 160, 0.35)',
        },
        cyan: {
          accent: '#00d8f6',
        },
        muted: '#94a3b8',
        'muted-dark': '#64748b',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
