/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#de2c4d",
        secondary: "#fb923c",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },

      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #f53d2d, #ff6533)',
      },

      padding: {
        'btn-y': '10px',
        'btn-l': '12px',
        'btn-r': '40px',
      }
    },
  },
  plugins: [],
}

