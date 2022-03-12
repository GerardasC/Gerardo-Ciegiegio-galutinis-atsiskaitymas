import { createTheme } from '@mui/material/styles';

const themeBase = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      xss: 360,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1560,
    },
  },
  typography: {
    fontFamily: '\'Roboto\', sans-serif',
    fontSize: 13,
    fontSizeLg: 15,
    fontSizeHg: 21,
  },
});

const lightTheme = createTheme(themeBase, {
  mixins: {
    toolbar: {
      [themeBase.breakpoints.up('xs')]: {
        minHeight: 64,
        padding: 0,
      },
    },
    productCarousel: {
      height: 300,
      [themeBase.breakpoints.up('sm')]: {
        height: 400,
      },
      [themeBase.breakpoints.up('md')]: {
        height: 400,
      },
      [themeBase.breakpoints.up('lg')]: {
        height: 500,
      },
    },
  },
  palette: {
    primary: {
      main: '#1e2d7d',
    },
    secondary: {
      main: '#00badb',
    },
    btnWhite: {
      main: '#ffffff',
    },
    btnBlue: {
      main: '#00badb',
    },
    lightRed: {
      main: '#fc2a68',
    },
    lightBlue: {
      main: '#6f42ef',
    },
    lightGreen: {
      main: '#26c1ce',
    },
    gridColor: {
      main: '#e1e3e4',
    },
    backgroundColor: {
      main: '#f3f5f6',
      secondary: '#fff',
    },
    textColor: {
      main: '#677279',
    },
  },
});

export default lightTheme;
