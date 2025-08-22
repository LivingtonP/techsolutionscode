/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'carter': ['Carter One', 'serif'],
        'changa': ['Changa One', 'sans-serif'],
        'onest': ['Onest', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

