module.exports.onWindow = browserWindow =>
  browserWindow.setVibrancy("ultra-dark");

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
};
const backgroundColor = '#383838';
const lightFrostyGreen = '#B9F6CA';
const overlap = "rgba(0, 0, 0, .15)";

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
  `,
  css: `
  ${config.css || ''}
  .hyper_main {
    border: none !important;
  }
  .header_header {
    background-color: #262626 !important;
    border-bottom: 1px solid #000 !important;
  }
  .tabs_borderShim {
    border-color: transparent !important;
  }
  .tab_tab {
    border: 0;
  }

  .tab_textActive {
    background: rgba(255, 255, 255, .05);
    color: ${lightFrostyGreen};
  }
  .tab_textActive i{
    color: ${lightFrostyGreen};
  }
  .hyper-search-wrapper {
      border: 0 !important;
      padding: 0 !important;
      background-color: transparent !important;
      display: flex;
      opacity: 0.8 !important;
    }
  .hyper-search-wrapper button {
    top: 0 !important;
    opacity: 0.8 !important;
    padding: 0 6px;
    cursor: pointer;
  }
  .hyper-search-wrapper button:hover {
    opacity: 1.0 !important;
  }
  .hyper-search-wrapper button:nth-of-type(1) {
    border-radius: 4px 0 0 4px !important;
    border-right: 1px solid #ddd !important;
  }
  .hyper-search-wrapper button:nth-of-type(2) {
    border-radius: 0 4px 4px 0 !important;
  }
  .hyper-search-wrapper:before {
    width: 20px;
    color: #000;
    position: absolute;
    content: "🔍";
    font-size: 10px;
    margin: 7px;
    z-index: 999;
  }
  #hyper-search-input {
    background-color: #fff !important;
    border-radius: 4px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    padding: 3px 6px 3px 24px !important;
    color: #000 !important;
    opacity: 0.9 !important;
    margin-right: 2px;
  }
  #hyper-search-input:focus {
    opacity: 1.0 !important;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
  }
`
});