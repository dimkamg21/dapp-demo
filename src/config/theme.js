import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1cac1d',
    },
    neutral: {
      main: '#f8f9f9',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          fontWeight: 600,
          textTransform: 'inherit',
        },
        contained: {
          fontWeight: 700,
          textTransform: 'inherit',
          borderRadius: 25,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    neutral: {
      main: '#333333',
    },
    primary: {
      main: '#1cac1d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1cac1d',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#f8f9f9',
      secondary: 'rgba(248, 249, 249, 0.7)',
      disabled: 'rgba(248, 249, 249, 0.5)',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: { color: '#f8f9f9' },
    h2: { color: '#f8f9f9' },
    h3: { color: '#f8f9f9' },
    h4: { color: '#f8f9f9' },
    h5: { color: '#f8f9f9' },
    h6: { color: '#f8f9f9' },
    body1: { color: '#f8f9f9' },
    body2: { color: 'rgba(248, 249, 249, 0.7)' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          fontWeight: 600,
          textTransform: 'inherit',
        },
        contained: {
          fontWeight: 700,
          textTransform: 'inherit',
          borderRadius: 25,
        },
      },
    },
  },
});

export default function getTheme(themeName) {
  switch (themeName) {
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
}
