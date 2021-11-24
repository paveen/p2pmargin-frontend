module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#32a852",
        blue: {
          450: '#060C23',
          200: 'rgba(23, 194, 237, 0.3)'
        },
        skyblue: {
          450: '#2EC6E8'
        },
        gray: {
          600: '#909090',
          300: '#C2C1C1',
          100: '#F7F8F9'
        }
      },
      spacing: {
        'card': '250px'
      },
      backgroundImage: {
        // 'background': "url('/img/hero-pattern.svg')",
        'background2': "url('/src/images/background1.png')",
        'background3': "url('/src/images/background3.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
