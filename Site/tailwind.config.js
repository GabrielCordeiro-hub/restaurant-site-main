/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0f0f0f',
        'brand-charcoal': '#1a1a1a',
        'brand-brown': '#2b1b12',
        'brand-gold': '#d4af37',
        'brand-orange': '#c86b28',
        'brand-beige': '#f5f0e6',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
