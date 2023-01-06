/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./stories/**/*.{ts,tsx}", 
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cherry': ['Cherry Swash'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'signika': ['Signika', 'sans-serif']
      }
    },
  },
  plugins: [],
}
