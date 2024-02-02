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
    h2: { fontSize: 30 },
    h6: { color: indigo[300] },
  },
});

export default darkTheme;
