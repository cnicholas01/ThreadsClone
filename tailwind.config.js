/** @type {import('tailwindcss').Config} */
module.exports = {
  // Limit scanned files to app and component folders to avoid scanning node_modules
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app-example/**/*.{js,jsx,ts,tsx}",
    "./assets/**/*.{svg,png,jpg,jpeg}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}