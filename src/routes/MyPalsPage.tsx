import { Checkbox, Grid, Typography } from '@mui/material';

import { PAL_NAME_LIST } from '../data/pals';
import MyPalCard from '../components/MyPalCard';
import React from 'react';
import { useStore } from '../store';

type CaughtFilter = 'caught' | 'uncaught' | null;

export default function MyPalsPage() {
  const [caughtFilter, setCaughtFilter] = React.useState<CaughtFilter>(null);

  const userPals = useStore((store) => store.userPals);

  const handleCaughtFilterChange = (selectedFilter: CaughtFilter) => {
    if (selectedFilter === caughtFilter) {
      setCaughtFilter(null);
    } else {
      setCaughtFilter(selectedFilter);
    }
  };

  const palsToDisplay = !caughtFilter
    ? PAL_NAME_LIST
    : PAL_NAME_LIST.filter((pal) =>
        caughtFilter === 'caught'
          ? userPals.includes(pal)
          : !userPals.includes(pal),
      );

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">My Pals</Typography>
      </Grid>

      <Grid item sx={{ textAlign: 'left' }}>
        <Grid container spacing={1}>
          <Grid
            item
            onClick={() => handleCaughtFilterChange('caught')}
            className="hover"
          >
            <Checkbox checked={caughtFilter === 'caught'} />
            Only Caught
          </Grid>
          <Grid
            item
            onClick={() => handleCaughtFilterChange('uncaught')}
            className="hover"
          >
            <Checkbox checked={caughtFilter === 'uncaught'} />
            Only Uncaught
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container spacing={2}>
          {palsToDisplay.map((palName) => (
            <MyPalCard key={palName} palName={palName} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
