/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html","./public/**/*.js"],
  theme: {
    extend: {
      animation: {
        opacity: 'opacity 3s ease infinite',
      },
      backgroundImage: {
        'gradient-245': 'linear-gradient(205deg, var(--tw-gradient-stops))' ,
        'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-270': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-90': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'radial-gradient': 'radial-gradient(130% 44% at 41% 40%, rgba(0, 0, 0, 0)0%, #151515 100%)',
      },
    },
  },
  plugins: [],
}

