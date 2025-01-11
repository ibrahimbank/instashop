import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A0561',
        secondary: '#F4F4F4',
        textColor: '#000',
        secondaryBg: '#FFEAFA',
      },
    },
  },
  plugins: [],
} satisfies Config;
