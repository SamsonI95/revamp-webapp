import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        cabin: "var(--font-cabin)",
        cabinSketch: "var(--font-cabin-sketch)",
      },
      colors: {
        component: {
          background: "var(--component-background)",
          border: "var(--component-border)",
        },
        primary: {
          alternate: "var(--primary-alternate)",
          text: "var(--primary-text)",
        },
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
    tailwindScrollbarHide,

    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};

export default config;
