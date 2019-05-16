import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const themeConfig = {
  spacing: 4,
  typography: {
    fontSize: 14,
    fontFamily: [
      'Roboto',
      'Open Sans',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  secondary: {
    light: '#8e8e8e',
    main: '#616161',
    dark: '#373737',
  },
  footer: {
    light: '#808080',
    main: '#808080',
    dark: '#3d4045',
  },
  text: {
    primary: '#292D32',
    secondary: '#8B8C8C',
  },
  links: {
    light: '#ff833a',
    main: '#e65100',
    dark: '#ac1900',
    contrastText: '#FFFFFF',
  },

}

let theme = createMuiTheme(themeConfig)
theme = responsiveFontSizes(theme)

export default theme