/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quattrocento: 'Quattrocento',  // Tailwind akan merender ini menjadi 'font-quattrocento'
        montserrat: ['Montserrat'],
        bold:[   'MontserratBold'], // Ini menjadi 'font-montserrat'
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
