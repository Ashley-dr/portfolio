/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors : {
    black: '#273444',
  },
  theme: {
    screens: {
      's':'200px',
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'bebas': ['Bebas Neue', 'sans-serif'],
      'bebos': ['Raleway', 'sans-serif'],
      'roboto': ['Roboto Mono', 'monospace'],
    },
    extend: {
      spacing: {
        '220x': '1150px',
        '440x':'3450px',
      }
    },
  },
  plugins: [],
  
}

