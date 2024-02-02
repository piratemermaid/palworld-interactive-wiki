import { ThemeProvider, createTheme } from '@mui/material';
import { indigo, red } from '@mui/material/colors';

import PalWorkSkills from './components/PalWorkSkills';
import './App.css';

const primaryColor = indigo[500];

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: red[400],
    },
  },
  typography: {
    h2: { fontSize: 30 },
    h6: { color: primaryColor },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PalWorkSkills />
    </ThemeProvider>
  );
}

export default App;
