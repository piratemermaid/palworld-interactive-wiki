import { Link, useLocation } from 'react-router-dom';
import { map } from 'lodash';
import { Box, Button, FormLabel, Grid, Switch } from '@mui/material';

import { useStore } from '@store';
import { ROUTES } from '@constants';

export const Header = () => {
  const darkMode = useStore((store) => store.darkMode);
  const toggleDarkMode = useStore((store) => store.toggleDarkMode);

  const location = useLocation();

  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        <Box sx={{ textAlign: 'right' }} onClick={toggleDarkMode}>
          <Switch
            inputProps={{ 'aria-label': 'Dark mode' }}
            checked={darkMode}
          />
          <FormLabel sx={{ '&:hover': { cursor: 'pointer' } }}>
            Dark Mode
          </FormLabel>
        </Box>
      </Grid>

      <Grid item>
        <nav>
          {map(ROUTES, ({ url, label }) => (
            <Link to={url} key={label}>
              <Button
                color={location.pathname === url ? 'primary' : 'secondary'}
              >
                {label}
              </Button>
            </Link>
          ))}
        </nav>
      </Grid>
    </Grid>
  );
};
