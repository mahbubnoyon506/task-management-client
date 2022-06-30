module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    colors: {  
      "primary": "#F63E7B",         
      "secondary": "#111430",             
      "accent": "#FFF8F5",             
      "neutral": "#2D2D2D",             
      "base-100": "#FFFFFF",             
      "info": "#869EF4",             
      "success": "#008140",              
      "warning": "#E8D001",              
      "error": "#E03D24",
      "slade" : "#F1F5F9",
      'primary-shade': {
        '50': '#fff5f8', 
        '100': '#feecf2', 
        '200': '#fdcfde', 
        '300': '#fbb2ca', 
        '400': '#f978a3', 
        '500': '#f63e7b', 
        '600': '#dd386f', 
        '700': '#b92f5c', 
        '800': '#94254a', 
        '900': '#791e3c'
    }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
