// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         reveal: {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         reveal: "reveal 0.8s ease-out forwards",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /* =========================
         BRAND COLORS (from your CSS)
      ========================= */
      colors: {
        brand: {
          purple: "#813DFF",
          green: "#DFFA33",
          black: "#1C1C1C",
        },
      },

      /* =========================
         OPTIMIZED ANIMATIONS
      ========================= */
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        /* GPU friendly */
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        reveal: "reveal 0.8s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },

      /* =========================
         TRANSITION OPTIMIZATION
      ========================= */
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },

  /* =========================
     FUTURE DARK MODE
  ========================= */
  darkMode: "class",

  /* =========================
     PERFORMANCE PLUGINS
  ========================= */
  plugins: [],
};

export default config;