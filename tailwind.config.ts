import { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', 'media'], // 'class' va 'media' yordamida dark mode'ni boshqarish
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        container:{
            center:true,
            padding:'1rem',
            screens:{
                sm:'100%',
                md:'100%',
                lg:'1024px',
                xl:'1280px',
            },
        },
        colors: {
            'custom-blue': '#1E3A8A', // Maxsus rang qo'shish
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'], // Maxsus shrift qo'shish
        },
        borderRadius: {
            'custom-lg': '16px', // Maxsus radius qo'shish
        },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // Animatsiyalar uchun plagin
  ],
};

export default config;
