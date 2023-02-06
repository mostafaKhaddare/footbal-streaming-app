/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
         'first-color' : "#0075ff"
      },
      
    },
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.nav-links': {
          display: 'flex',
          width: '24rem',
          justifyContent: 'end',
          alignItems: 'center',
          color: 'white',
          },
          ".main-input" : {
            padding : "20px",
            width : "100%",
            border : "1px solid #ccc" ,
            borderRadius : "8px" ,
            outline : "none"
          },
          "form-heading" : {
            color :"#2a2a2a" ,
            fontWeight : 400,
            textAlign : "left" ,
            lineHeight : '20px',
            fontSize : "18px",
            margin :"0 0 8px",
            padding : "0"
          },
          "form-answer" : {
            color :"#2a2a2a" ,
            fontWeight : 300,
            textAlign : "left" ,
            lineHeight : '20px',
            fontSize : "16px",
            margin :"0 0 24px",
            padding : "0"
          }
      })
    })
  ],
}