/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        berryBlossom: '#790D1D',
        autumnLeaf: '#9D352E',
        oliveGreen: '#4B4A1E',
        barkBrown: '#79512E',
        rivuletBeige: '#E0D2BD',
        greenFont: '#00231C',
      },
      fontFamily: {
        display: ['Trebuchet MS', 'sans-serif'],
        title: ['Times New Roman', 'serif'],
        impact: ['Impact', 'sans-serif'],
        comic: ['Comic Sans MS', 'cursive'],
        calibri: ['Calibri', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        comfort: ['Comfortaa', 'cursive'],
      },
      fontSize: {
        xs: ['11px', { lineHeight: '1.4' }],    // captions
        sm: ['15px', { lineHeight: '1.5' }],    // subtitle
        base: ['16px', { lineHeight: '1.6' }],  // body
        lg: ['20px', { lineHeight: '1.4' }],    // body large
        xl: ['25px', { lineHeight: '1.3' }],    // title
        '2xl': ['30px', { lineHeight: '1.2' }], // title large
        '3xl': ['40px', { lineHeight: '1.1' }], // display
      },
    },
  },
  plugins: [],
}; 