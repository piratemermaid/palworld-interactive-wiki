import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from '@components/layout';
import { useStore } from '@store';
import { lightTheme, darkTheme } from '@styles/themes';
import '@styles/App.css';

function App() {
  const darkMode = useStore((store) => store.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
