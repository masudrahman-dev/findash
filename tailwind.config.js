/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Manrope", sans-serif', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#31B099",
      midnight: "#1C2634",
      dark: "#1A1C1E",
      gray: "#6C7278",
    },
    extend: {
      fontSize: {
        // Semantic Naming
        small: [
          "0.75rem",
          {
            lineHeight: "1.2rem",
            fontWeight: "500",
          },
        ],
        // medium: "1rem",
        // large: "1.25rem",
        // heading: "2rem",
        // subheading: "1.5rem",
        // menu: "0.875rem",
        // button: "1rem",
        // link: "1rem",
        // meta: "0.875rem",

        // Functional Naming
        body: "1rem",
        caption: "0.875rem",
        title: [
          "1.125rem",
          {
            lineHeight: "1.6875rem",
            fontWeight: "600",
          },
        ],
        subtitle: [
          "1.125rem",
          {
            lineHeight: "1.1.6875rem",
            fontWeight: "500",
          },
        ],
        label: [
          "0.875rem",
          {
            lineHeight: "1.1.6875rem",
            fontWeight: "500",
          },
        ],
        // badge: "0.75rem",
        // tag: "0.875rem",
        // error: "0.875rem",
        // help: "0.875rem",
        // quote: "1.25rem",
      },
    },
  },
  plugins: [],
};
