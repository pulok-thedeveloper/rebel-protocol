/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rebel_bg: "#101319",
        rebel_fg: "#181C25",
        rebel_secondary: "#FFA9F9",
        rebel_primary: "#FFF7AD",
        rebel_text_color: "#F2F4F7",
        rebel_border_color: "#F2F4F7",
      },
    },
  },
  plugins: [],
};
