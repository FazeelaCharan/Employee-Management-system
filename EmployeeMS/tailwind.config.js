/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Example: Inter as the default sans font
        serif: ['"Merriweather"', "serif"], // Example: Merriweather as the serif font
        custom: ['"Mona Sans"', "serif"],
      },
    },
    plugins: [],
  },
};
