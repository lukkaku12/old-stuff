const colors = require('tailwindcss/colors')

module.exports = {
  content: [
      // Example content paths...
      './src/pages/**/*.{js,jsx}',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],

  theme: {
    colors: {
      ...colors
    }
  },
 
};

