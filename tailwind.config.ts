import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scale: {
        "101": "1.01", // 1% scale
        "102": "1.02", // 2% scale
        "103": "1.03", // 3% scale
      },
      fontFamily: {
        ar: ['"AR One Sans"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"], // optional second custom font
        blackOps: ['"Black Ops One"', "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
