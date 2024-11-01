import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1a2e',
      dark: '#16213e',
      accent: '#4ecca3',
    },
    secondary: {
      main: '#333',
      light: '#4f4f4f',
      extraLight: '#6c757d',
    },
    background: {
      default: '#0d0d0d',
      paper: '#1f1f1f',
    },
    text: {
      primary: '#e5e5e5',
      secondary: '#bfbfbf',
    },
    action: {
      active: '#4ecca3',
      hover: '#3d8b7a',
      selected: '#2b2b44',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  scrollbar: {
    width: '8px',
    backgroundColor: '#1c1c1c',
    thumbColor: '#4e4e4e',
  },
});

export default theme;
