module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         transitionProperty: {
            width: 'width',
         },
         colors: {
            brand: '#010B14',
            'brand-900': '#021628',
            'brand-800': '#03182C',
            'brand-700': '#042643',
            'brand-600': '#06335B',
            'brand-500': '#084072',
            'brand-400': '#0A4E8A',
            'brand-300': '#0B5BA1',
            magnolia: '#E2E7F3',
            turquo: '#6FFFE9',
            yelo: '#FFD166',
         },
         fontFamily: {
            inter: ['Inter', 'sans-serif'],
            heebo: ['Heebo', 'serif'],
            fira: ['Fira Code', 'serif'],
         },
         boxShadow: {
            brand: '0.8rem 0.8rem #6FFFE9',
            button: '0.25rem 0.25rem #6FFFE9',
         },
         animation: {
            'gradient-x': 'gradient-x 10s ease infinite',
         },
         keyframes: {
            'gradient-x': {
               '0%, 100%': {
                  'background-size': '400% 400%',
                  'background-position': '0% 50%',
               },
               '50%': {
                  'background-size': '400% 400%',
                  'background-position': '100% 50%',
               },
            },
         },
      },
   },
   variants: {
      extend: {
         backgroundColor: ['active'],
         boxShadow: ['active'],
         inset: ['active'],
         backdropBlur: ['hover', 'focus'],
      },
   },
   plugins: [],
}
