/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
   extend: {
     fontFamily:{
      //  Redressed:  ['Redressed', "cursive"], 
       Redressed:  ["sans-serif"],
     },
     colors:{
      //  headingColor: '#041D49',
       headingColor: '#1A0000',
       'text-primary': '#89C4E1',
       'active': '#89C4E1'

     },
     backgroundColor:{
        'background-primay' : '#BFEAF5'
     },
     boxShadow: {
       '3xl': '2px 0px 8px 2px',
       "4xl": "5px 5px 10px 2px rgb(77 93 118 / 10%);"
     },
    
   },

 },
 plugins: [],
}
