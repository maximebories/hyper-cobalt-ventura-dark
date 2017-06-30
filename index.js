const colors = {
  black: '#323232',
  red: '#C0392B',
  green: '#27AE60',
  yellow: '#F39C12',
  blue: '#2980B9',
  magenta: '#8E44AD',
  cyan: '#2980B9',
  white: '#E1E1E1',
  lightBlack: '#95A5A6',
  lightRed: '#E74C3C',
  lightGreen: '#2ECC71',
  lightYellow: '#F1C40F',
  lightBlue: '#3498DB',
  lightMagenta: '#9B59B6',
  lightCyan: '#3498DB',
  lightWhite: '#FFFFFF'
}
const backgroundColor = '#34495E'

exports.decorateConfig = (config) => Object.assign({}, config, {
  colors,
  cursorColor: colors.lightYellow,
  foregroundColor: colors.white,
  backgroundColor: backgroundColor,
  borderColor: 'rgba(255,255,255,0.05)',
  termCSS: `
    ${config.termCSS || ''}
    x-screen x-row,
    x-screen x-row span {
      font-variant-ligatures: initial !important;
    }
  `
})
