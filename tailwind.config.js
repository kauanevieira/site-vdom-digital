/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // azul claro
          DEFAULT: '#1e40af', // azul padrão
          dark: '#1e3a8a', // azul escuro
        },
        secondary: {
          light: '#f472b6',
          DEFAULT: '#db2777',
          dark: '#be185d',
        },
      },
    },
  },
  plugins: [],
};

export default config;
