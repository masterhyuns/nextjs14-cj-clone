import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {},
      width: {
        full: '100%', // wh-full 중 width 부분
      },
      height: {
        full: '100%', // wh-full 중 height 부분
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.wh-full': {
          width: '100%',
          height: '100%',
        },
      });
    },
  ],
};
export default config;
