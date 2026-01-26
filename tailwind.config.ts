import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        body: ['var(--font-manrope)', 'sans-serif'],
        headline: ['var(--font-manrope)', 'sans-serif'],
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
        teal: {
          '50': '#f0fdfa',
          '100': '#ccfbf1',
          '200': '#99f6e4',
          '300': '#5eead4',
          '400': '#2dd4bf',
          '500': '#14b8a6', // Electric Teal is close to this
          '600': '#0d9488',
          '700': '#0f766e',
          '800': '#115e59',
          '900': '#134e4a',
          '950': '#042f2e',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='hsl(var(--border))' stroke-opacity='0.1'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'circuit-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20'%3e%3cpath fill='hsl(var(--primary))' fill-opacity='0.03' d='M0 10V8h2V0h2v8h2V0h2v8h2V0h2v8h2V0h2v8h2v2h-2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2H8v2H6v-2H4v2H2v-2H0v-2h2v-2H0zm2 0v2h2v-2H2zm4 0v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z'/%3e%3c/svg%3e\")",
        'panel-pattern': "url(\"data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='hsl(var(--border))' fill-opacity='0.1' fill-rule='evenodd'%3e%3cpath d='M0 40L40 0H0v40zM40 40V0h-2.5L0 37.5V40h40z'/%3e%3c/g%3e%3c/svg%3e\")",
        'flow-pattern': "url(\"data:image/svg+xml,%3csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='hsl(var(--primary))' fill-opacity='0.04'%3e%3cpath d='M50 50c0 16.568 13.432 30 30 30V50H50zM0 50c0-16.568 13.432-30 30-30v30H0z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e\")",
        'airflow-pattern': "url(\"data:image/svg+xml,%3csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M0 10h100' stroke='hsl(var(--border))' stroke-opacity='0.1' stroke-width='1' stroke-dasharray='3 3'/%3e%3c/svg%3e\")",
        'grain-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath fill='hsl(var(--border))' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3e%3c/path%3e%3c/svg%3e\")",
      },
      boxShadow: {
        'md': '0 6px 18px rgba(0,0,0,0.08)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        "marquee-horizontal": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        "marquee-horizontal": "marquee-horizontal var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
