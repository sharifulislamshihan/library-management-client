/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
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

