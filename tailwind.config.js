/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Sky 500
        secondary: "#6366f1", // Indigo 500
        dark: "#0f172a", // Slate 900
        light: "#f8fafc", // Slate 50
        accent: "#f59e0b", // Amber 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
