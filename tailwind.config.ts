import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        stretch: '100% 100%',
      },
      colors: {
        main: '#121721',
        beige: {
          200: '#f5f5dc',
        },
        cyan: {
          500: '#00bcd4',
        },
        cobalt: {
          700: '#0047ab',
          400: '#0D8ED6',
        },
      },
    },
  },
  plugins: [],
};
export default config;
