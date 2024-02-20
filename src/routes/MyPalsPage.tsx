import { Grid, Typography } from '@mui/material';

import { PAL_NAME_LIST } from '../data/pals';
import MyPalCard from '../components/MyPalCard';

export default function MyPalsPage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h2" sx={{ mb: 2 }}>
          My Pals
        </Typography>
      </Grid>

      <Grid item>FILTERS</Grid>

      <Grid item>
        <Grid container spacing={2}>
          {PAL_NAME_LIST.map((palName) => (
            <MyPalCard key={palName} palName={palName} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
