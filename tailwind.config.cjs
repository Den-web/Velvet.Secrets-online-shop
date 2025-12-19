module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
    },

    extend: {
      width: {
        layoutMain: '952px',
        layoutAside: '592px',
      },
      maxWidth: {
        'screen-3xl': '1920px',
      },
      colors: {
        grey6: '#121212',
        pink5: '#C31F5C',
        white: '#ffffff',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
       boxShadow: {
        custom: '1px 2px 10px 0 rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), '@tailwindcss/line-clamp'],
};
