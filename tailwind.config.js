/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#3E1F1B',
          deep: '#2B1512',
          card: '#4A2722',
          light: '#5A322B',
        },
        cream: {
          DEFAULT: '#F6F0DC',
          dark: '#EBE2C4',
        },
        paper: '#FBF8EF',
        butter: {
          DEFAULT: '#E3DAA0',
          light: '#EFE7BA',
          dark: '#D4CA8D',
        },
        blush: {
          DEFAULT: '#F7C8DA',
          light: '#FCE7EF',
          dark: '#EEB1C7',
        },
        gold: {
          DEFAULT: '#B08A4A',
          light: '#C7A263',
          dark: '#937035',
        },
        gridline: '#D9D2B8',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', 'cursive'],
        hand: ['Caveat', 'cursive'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'badge': '0 20px 40px -15px rgba(62, 31, 27, 0.35), 0 0 0 1px rgba(176, 138, 74, 0.3)',
        'sticky': '4px 6px 16px rgba(43, 21, 18, 0.12), 0 1px 3px rgba(43, 21, 18, 0.08)',
        'polaroid': '0 12px 28px -6px rgba(43, 21, 18, 0.18), 0 4px 10px rgba(43, 21, 18, 0.06)',
        'mockup': '0 25px 50px -12px rgba(43, 21, 18, 0.25), 0 0 0 1px rgba(62, 31, 27, 0.1)',
        'card-soft': '0 10px 30px -10px rgba(62, 31, 27, 0.08)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'swing': 'swing 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
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
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1.5deg)' },
          '75%': { transform: 'rotate(-1.5deg)' },
        },
        twinkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'scale(1.25) rotate(15deg)', opacity: '0.7' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
