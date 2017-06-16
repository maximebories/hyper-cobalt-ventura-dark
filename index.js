// standard ANSI Colours
const black = '#323232';
const red = '#C0392B';
const green = '#27AE60';
const yellow = '#F39C12';
const blue = '#2980B9';
const magenta = '#8E44AD';
const cyan = '#2980B9';
const white = '#ECF0F1';
const lightBlack = '#95A5A6';
const lightRed = '#E74C3C';
const lightGreen = '#2ECC71';
const lightYellow = '#F1C40F';
const lightBlue = '#3498DB';
const lightMagenta = '#9B59B6';
const lightCyan = '#3498DB';
const lightWhite = '#ffffff';

// custom colours
const cobaltBackground = '#34495E';
const variableBlue = '#0d3a58';
const dustyBlue = '#34424C';
const highlightBlue = '#1F4662';

exports.decorateConfig = (config) => Object.assign({}, config, {
  cursorColor: lightYellow,
  foregroundColor: white,
  backgroundColor: cobaltBackground,
  borderColor: 'rgba(255,255,255,0.05)',
  css: `
    ${config.css || ''}
	* {
	}
    .tab_tab:before {
      border-left: 1px solid;
    }
    .tab_active {
      background: rgba(255,255,255,0.05);
    }
    .tab_active:before {
      border-color: ${yellow};
    }
  `,
  colors: {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack,
    lightRed,
    lightGreen,
    lightYellow,
    lightBlue,
    lightMagenta,
    lightCyan,
    lightWhite,
  },
});
