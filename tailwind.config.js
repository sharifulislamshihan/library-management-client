/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        heading: 'Playfair Display, sans-serif',
        rancho: 'Open Sans, sans-serif',
      }
    },
  },
  plugins: [require("daisyui")],
}

