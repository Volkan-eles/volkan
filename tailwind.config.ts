
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'booth-blue': '#007BFF',
        'booth-light-blue': '#66B2FF',
        'border': 'hsl(var(--border))',
        'booth-white': '#FFFFFF',
        'booth-black': '#000000',
        'booth-red': '#EF4444',
        'booth-green': '#10B981',
        'booth-frame-border': '#DDDDDD',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'mono': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
