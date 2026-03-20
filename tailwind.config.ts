import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        headline: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        flame: {
          orange: "hsl(var(--flame-orange))",
          red: "hsl(var(--flame-red))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "flame-flicker": {
          "0%, 100%": { transform: "scaleY(1) scaleX(1)", opacity: "0.8" },
          "25%": { transform: "scaleY(1.1) scaleX(0.95)", opacity: "1" },
          "50%": { transform: "scaleY(0.95) scaleX(1.05)", opacity: "0.7" },
          "75%": { transform: "scaleY(1.05) scaleX(0.98)", opacity: "0.9" },
        },
        "flame-sway": {
          "0%, 100%": { transform: "rotate(-2deg) translateY(0)" },
          "33%": { transform: "rotate(1deg) translateY(-3px)" },
          "66%": { transform: "rotate(-1deg) translateY(-1px)" },
        },
        "fire-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(48 96% 53% / 0.3), 0 0 60px hsl(20 90% 50% / 0.15)" },
          "50%": { boxShadow: "0 0 40px hsl(48 96% 53% / 0.5), 0 0 80px hsl(20 90% 50% / 0.25)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%": { transform: "translateX(-2px) rotate(-0.5deg)" },
          "20%": { transform: "translateX(2px) rotate(0.5deg)" },
          "30%": { transform: "translateX(-1px)" },
          "40%": { transform: "translateX(1px)" },
          "50%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { textShadow: "0 0 10px hsl(48 96% 53% / 0.3)" },
          "50%": { textShadow: "0 0 30px hsl(48 96% 53% / 0.6), 0 0 60px hsl(20 90% 50% / 0.3)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slam-in": {
          "0%": { transform: "scale(1.3) rotate(2deg)", opacity: "0" },
          "60%": { transform: "scale(0.98) rotate(-0.5deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
        },
        "ember-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "100%": { transform: "translateY(-40px) scale(0.3)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flame-flicker": "flame-flicker 2s ease-in-out infinite",
        "flame-sway": "flame-sway 3s ease-in-out infinite",
        "fire-glow": "fire-glow 2s ease-in-out infinite",
        "shake": "shake 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "slam-in": "slam-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "ember-rise": "ember-rise 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
