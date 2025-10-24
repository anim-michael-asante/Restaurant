export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      colors: {
        primary: "#8B2E3C", // Merlot Red
        secondary: "#FAF4ED", // Ivory Cream
        accent: "#556B2F", // Olive Green
        dark: "#2E2E2E", // Charcoal Slate
        light: "#E9DAC1", // Warm Sand
        highlight: "#D4A373", // Golden Mustard
      },
      
    },
  },
  plugins: [],
};
