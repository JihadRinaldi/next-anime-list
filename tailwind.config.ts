import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pale-blue': '#ABC4ED',
        'natural-black': '#000000',
        'charcoal-gray': '#272727',
        'dark-gray': '#333333',
        'light-gray': '#ABABAB',
        'eerie-black': '#181818',
        'silver-gray': '#A3A3A3',
      },
    },
  },
  plugins: [],
};
export default config;
