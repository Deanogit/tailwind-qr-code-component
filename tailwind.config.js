/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['"Outfit", sans-serif'],
    },
    extend: {
      colors: {
        'light-gray': 'hsl(212, 45%, 89%)',
        'gray-blue': 'hsl(220, 15%, 45%)',
        'dark-blue': 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
};
