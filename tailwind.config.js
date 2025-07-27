/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        inter: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        heading1: ["72px", { lineHeight: "1.2" }],
        headingHuge: ["206px", { lineHeight: "0.8" }],
        subtitle: ["24px", { lineHeight: "1.3" }],
        bodyLarge: ["18px", { lineHeight: "1.6" }],
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 8px 2px rgba(255,115,51,0.3)" },
          "50%": { boxShadow: "0 0 12px 4px rgba(255,115,51,0.5)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floatCard: {
          "0%": {
            opacity: "0",
            transform: "translateY(0px) scale(0.8) rotate(0deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(800px) scale(1) rotate(15deg)",
          },
        },
      },
      animation: {
        "border-glow": "glow 1.5s infinite ease-in-out",
        marquee: "marquee 20s linear infinite",
        scroll: "scroll 40s linear infinite",
        "float-card": "floatCard 6s ease-in-out forwards",
      },

      colors: {
        "ui-orange-500": "#E87811",
        black: "#000000",
      },
    },
  },

  plugins: [],
};
