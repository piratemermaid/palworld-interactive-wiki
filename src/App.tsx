import { CssBaseline, ThemeProvider } from '@mui/material';

import Header from './components/Header';
import PalWorkSuitability from './components/PalWorkSuitability';
import { useStore } from './store';
import { lightTheme, darkTheme } from './styles/themes';
import './App.css';

function App() {
  const darkMode = useStore((store) => store.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Header />
      <PalWorkSuitability />
    </ThemeProvider>
  );
}

export default App;
