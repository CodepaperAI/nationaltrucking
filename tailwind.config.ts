import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: '#0A0E14',
          900: '#0A0E14',
          800: '#12161D',
          700: '#1A1F28',
          600: '#252B36',
          500: '#3A424F'
        },
        steel: {
          DEFAULT: '#8A93A3',
          400: '#A8B0BE',
          300: '#C7CCD6',
          200: '#E1E4EA',
          100: '#F2F4F7'
        },
        amber: {
          DEFAULT: '#F5A524',
          600: '#D98E12',
          500: '#F5A524',
          400: '#FBB738',
          300: '#FDCB6B'
        },
        signal: {
          DEFAULT: '#E11D2A',
          700: '#B11620',
          500: '#E11D2A'
        },
        chrome: '#F8F8F5',
        road: '#171B22'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)']
      },
      boxShadow: {
        hard: '0 20px 70px -35px rgba(10, 14, 20, 0.55)',
        insetLine: 'inset 0 1px 0 rgba(255,255,255,0.12)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        sweep: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        roadDash: {
          to: { strokeDashoffset: '-80' }
        }
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        sweep: 'sweep 6s ease-in-out infinite',
        roadDash: 'roadDash 1.5s linear infinite'
      }
    }
  },
  plugins: []
};

export default config;
