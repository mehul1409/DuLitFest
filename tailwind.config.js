/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': 'rgb(9, 19, 53)', // replace with your color
      },
    },
  },
  plugins: [],
}