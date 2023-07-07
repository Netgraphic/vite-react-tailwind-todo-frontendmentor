/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('./assets/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('./assets/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('./assets/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('./assets/images/bg-mobile-dark.jpg')",
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}

