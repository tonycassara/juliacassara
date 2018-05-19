const juliaTheme = {
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'sans-serif'],
  overrideThemeStyles: ({ rhythm }, options, styles) => ({
  'h1,h2,h3,h4,h5,h6': {
    textTransform: 'uppercase'
  }
})
}

export default juliaTheme
