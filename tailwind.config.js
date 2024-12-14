/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0B1121',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
        },
        accent: {
          blue: '#60A5FA',
          purple: '#A78BFA',
          cyan: '#67E8F9',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(96, 165, 250, 0.3)' },
          '100%': { 'box-shadow': '0 0 40px rgba(96, 165, 250, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};