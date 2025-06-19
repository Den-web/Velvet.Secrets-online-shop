// tailwind.config.cjs
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        grey6: '#121212',
        pink5: '#C31F5C',
        white: '#ffffff',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        releway: ['Releway', 'sans-serif'],
        moserat: ['Monserat', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), '@tailwindcss/line-clamp'],
};
