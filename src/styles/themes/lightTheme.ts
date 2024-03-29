import { createTheme } from '@mui/material';
import { indigo, red } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: red[600],
    },
    background: { default: indigo[50] },
  },
  typography: {
    h2: { fontSize: 30 },
    h3: { fontSize: 24, color: red[600], textTransform: 'uppercase' },
    h6: { color: indigo[500] },
  },
});

export default lightTheme;
