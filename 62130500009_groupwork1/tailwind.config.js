module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../images/1.jpg')",
        'cook1': "url('../images/2.png')",
        'cook2': "url('../images/3.png')",
        'cook3': "url('../images/4.jpg')",
        'cook4': "url('../images/5.png')",
        'cook5': "url('../images/6.png')",
        'arrow': "url('../images/arrow2.png')"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
       '50%': '50%',
       '100%': '100%',
       '125%': '125%',
      },
      screens: {
        '3xl': '1920px',
      },
      padding: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        xxl:'400px',
        xxxl:'528px',
        '4xl':'660px',
        '5xl':'790px'
        
       },
    },
  },
  variants: {
    extend: {
      zIndex: ['group-hover','hover', 'active'],
      backgroundSize: ['group-hover','hover', 'focus'],
      transitionDuration: ['group-hover','hover', 'focus'],
      inset: ['group-hover','hover', 'focus'],
    },
  },
  plugins: [],
}
