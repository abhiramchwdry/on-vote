/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#010108",
        "button-blue" : "#275dc0"
      },
      backgroundImage:{
        "hero": "url('/src/assets/images/HomePageImg.jpg')"
      },
      fontFamily:{
        "body": ["poppins"],
        "heading": ["Montserrat","sans-serif"]
      },
      screens: {
        'sm': '640px', // Small screens (phones)
        'md': '768px', // Medium screens (tablets)
        'lg': '1024px', // Large screens (desktops)
      },
    },
  },
  plugins: [],
}

