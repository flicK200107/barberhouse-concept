/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'racing-green': '#1B4D3E',
        'leather': '#8B4513',
        'copper': '#B87333',
        'cream': '#F5F5DC',
        'charcoal': '#1A1A1A',
      },
      fontFamily: {
        'slab': ['"Roboto Slab"', 'serif'],
        'sans': ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'vintage-pattern': "url('https://www.transparenttextures.com/patterns/black-linen.png')",
      }
    },
  },
  plugins: [],
}
