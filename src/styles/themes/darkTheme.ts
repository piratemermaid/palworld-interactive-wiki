import { createTheme } from '@mui/material';
import { grey, indigo, red } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: indigo[300],
    },
    secondary: {
      main: red[300],
    },
    text: {
      primary: grey[400],
    },
    background: { default: grey[900] },
  },
  typography: {
    h2: { fontSize: 30, color: grey[500] },
    h3: { fontSize: 24, color: red[300], textTransform: 'uppercase' },
    h6: { color: indigo[300] },
  },
  components: {
    MuiCard: {
      styleOverrides: { root: { backgroundColor: 'rgb(36, 36, 36)' } },
    },
  },
});

export default darkTheme;
