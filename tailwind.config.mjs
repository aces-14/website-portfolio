/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  safelist: ['visible'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        surface: '#0F0F1A',
        accent: '#00D9FF',
        border: '#1E1E2E',
        'text-primary': '#F0F0F5',
        'text-muted': '#9898A8',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card-hover': '0 0 0 1px rgba(0,217,255,0.35), 0 8px 32px rgba(0,217,255,0.1)',
        'glow-sm': '0 0 16px rgba(0,217,255,0.35)',
      },
    },
  },
  plugins: [],
};
