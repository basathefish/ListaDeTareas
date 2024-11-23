/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    'bg-work', 
    'bg-university', 
    'bg-sport', 
    'bg-design',
    'bg-social', 
    'bg-music', 
    'bg-health', 
    'bg-movie', 
    'bg-home'
  ],
  
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      
      grocery:'#f0f2fd',
      sport:'#80ffff',
      work:'#ff9680',
      design:'#80ffd9',
      university:'#809cff',
      social: '#ff80eb',
      music: '#fc80ff',
      health: '#80ffa3',
      movie: '#80d1ff',
      home: '#ff8080',
      'violet':{
        50: '#f0f2fd',
        100: '#e4e7fb',
        200: '#ced3f7',
        300: '#b0b6f1',
        400: '#8687e7',
        500: '#7c75df',
        600: '#6b5ad1',
        700: '#5c4abb',
        800: '#4b3f94',
        900: '#403877',
        950: '#262145',
      },
      'gray':{
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#121212',
      },
      'red':{
        50: '#fff1f1',
        100: '#ffdfdf',
        200: '#ffc5c5',
        300: '#ff9d9d',
        400: '#ff6464',
        500: '#ff4949',
        600: '#ed1515',
        700: '#c80d0d',
        800: '#a50f0f',
        900: '#881414',
        950: '#4b0404',
      },
      'green':{
        50: '#eeffef',
        100: '#d8ffdc',
        200: '#b4febb',
        300: '#7afb88',
        400: '#39ef4d',
        500: '#0fd826',
        600: '#06c61c',
        700: '#088d18',
        800: '#0d6e19',
        900: '#0d5a17',
        950: '#003308',
      }
    },
    extend: {
      borderRadius: {
        'sm': '0.3rem',
        'md': '0.8rem',
        'lg': '1.5rem',
      }
    },
  },
  plugins: [],
}



