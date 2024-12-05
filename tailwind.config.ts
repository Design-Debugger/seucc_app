import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    }
  },
  plugins: [],
}

export default config;
