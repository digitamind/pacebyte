/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#0a0a0f',
          surface: '#111118',
          elevated: '#1a1a24',
          border: '#252530',
        },
        accent: {
          cyan: '#00d4ff',
          purple: '#a855f7',
          green: '#00ff88',
          blue: '#3b82f6',
          pink: '#ec4899',
        },
        primary: {
          50: '#e0f7fe',
          100: '#b3e5fc',
          200: '#80d4fa',
          300: '#4dc3f7',
          400: '#26b6f6',
          500: '#00d4ff',
          600: '#00b8e6',
          700: '#0098cc',
          800: '#007bb3',
          900: '#005080',
        },
        secondary: {
          50: '#f3e5f5',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#a855f7',
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '800' }],
        'display-sm': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
        'hero': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'section': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      backgroundImage: {
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(0, 212, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 255, 136, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.15) 0px, transparent 50%)',
        'gradient-mesh-strong': 'radial-gradient(at 0% 0%, rgba(0, 212, 255, 0.25) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(168, 85, 247, 0.25) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 255, 136, 0.25) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.25) 0px, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
