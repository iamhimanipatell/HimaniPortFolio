/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#E9E7CB',
        'warm-beige': '#D9C7A0',
        taupe: '#A08C6E',
        olive: {
          DEFAULT: '#8A9A2B',
          dark: '#6E7B21',
          light: '#A4B634',
        },
        pink: {
          bubblegum: '#F06EAF',
          hot: '#E0147E',
        },
        burgundy: {
          DEFAULT: '#5A0B16',
          light: '#7A1020',
          dark: '#3D070E',
        },
        offwhite: '#FBF8EF',
        ink: '#1E1B18',
        'cyan-glow': '#7DF3FF',
      },
      fontFamily: {
        pixel: ['Silkscreen', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        hand: ['Caveat', 'cursive'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'retro': '4px 4px 0px #1E1B18',
        'retro-lg': '7px 7px 0px #1E1B18',
        'retro-sm': '2px 2px 0px #1E1B18',
        'retro-pink': '4px 4px 0px #E0147E',
        'retro-olive': '4px 4px 0px #8A9A2B',
        'polaroid': '0 10px 25px -5px rgba(30, 27, 24, 0.15), 0 8px 10px -6px rgba(30, 27, 24, 0.1)',
        'window': '8px 12px 30px rgba(90, 11, 22, 0.15), 0 0 0 2px #1E1B18',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
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
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(-1.5deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(8deg)' },
          '60%': { transform: 'rotate(-4deg)' },
          '80%': { transform: 'rotate(4deg)' },
        },
      },
    },
  },
  plugins: [],
};
