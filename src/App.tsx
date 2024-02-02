import { CssBaseline, ThemeProvider } from '@mui/material';

import Header from './components/Header';
import PalWorkSkills from './components/PalWorkSkills';
import { useStore } from './store';
import { lightTheme, darkTheme } from './styles/themes';
import './App.css';

function App() {
  const darkMode = useStore((store) => store.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Header />
      <PalWorkSkills />
    </ThemeProvider>
  );
}

export default App;
