import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#051224', // Black Pearl
      contrastText: '#ffbe00',
    },
    secondary: {
      main: '#ffbe00', // ArtyClick Amber
      contrastText: '#051224',
    },
    background: {
      default: '#051224',
      paper: '#0a1f3d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffbe00',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontWeight: 'bold',
          textTransform: 'none',
          padding: '12px 24px',
        },
      },
    },
  },
});