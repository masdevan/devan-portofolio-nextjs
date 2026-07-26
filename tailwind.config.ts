import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        sm: "0px",
        md: "0px",
        lg: "0px",
      },
      animation: {
        shiny: "shiny 8s ease-in-out infinite",
      },
      keyframes: {
        shiny: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config

export default config
