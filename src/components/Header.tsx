import { Box, FormLabel, Grid, Switch } from '@mui/material';
import { useStore } from '../store';

export default function Header() {
  const darkMode = useStore((store) => store.darkMode);
  const toggleDarkMode = useStore((store) => store.toggleDarkMode);

  return (
    <Grid container>
      <Box sx={{ textAlign: 'right' }} onClick={toggleDarkMode}>
        <Switch inputProps={{ 'aria-label': 'Dark mode' }} checked={darkMode} />
        <FormLabel sx={{ '&:hover': { cursor: 'pointer' } }}>
          Dark Mode
        </FormLabel>
      </Box>
    </Grid>
  );
}
