/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['graphie', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#03ff94',   // verde Tenpo
          light:   '#b3ffe4',
          dark:    '#00cc72',
        },
        secondary: '#4C1D95',
        accent:    '#9333EA',
        neutral: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
