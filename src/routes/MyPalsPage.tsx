import { Checkbox, Grid, Typography } from '@mui/material';

import { PAL_NAME_LIST } from '../data/pals';
import MyPalCard from '../components/MyPalCard';
import React from 'react';
import { useStore } from '../store';

type CaughtFilter = 'caught' | 'uncaught' | null;
type CaughtTenFilter = 'caught' | 'uncaught' | null;

export default function MyPalsPage() {
  const [caughtFilter, setCaughtFilter] = React.useState<CaughtFilter>(null);
  const [caughtTenFilter, setCaughtTenFilter] =
    React.useState<CaughtTenFilter>(null);

  const userPals = useStore((store) => store.userPals);
  const userPalsCaughtTen = useStore((store) => store.userPalsCaughtTen);

  const handleCaughtFilterChange = (
    selectedFilter: CaughtFilter,
    filter: CaughtFilter | CaughtTenFilter,
    updateFn: React.Dispatch<
      React.SetStateAction<CaughtFilter | CaughtTenFilter>
    >,
  ) => {
    if (selectedFilter === filter) {
      updateFn(null);
    } else {
      updateFn(selectedFilter);
    }
  };

  const palsToDisplay = !caughtFilter
    ? PAL_NAME_LIST
    : PAL_NAME_LIST.filter((pal) => {
        if (caughtFilter === 'uncaught') {
          return !userPals.includes(pal);
        }

        if (caughtFilter === 'caught') {
          if (caughtTenFilter === 'caught') {
            return userPalsCaughtTen.includes(pal);
          }

          if (caughtTenFilter === 'uncaught') {
            return userPals.includes(pal) && !userPalsCaughtTen.includes(pal);
          }

          return userPals.includes(pal);
        }

        return pal;
      });

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">My Pals</Typography>
      </Grid>

      <Grid item sx={{ textAlign: 'left' }}>
        <Grid container spacing={1}>
          <Grid
            item
            onClick={() =>
              handleCaughtFilterChange('caught', caughtFilter, setCaughtFilter)
            }
            className="hover"
          >
            <Checkbox checked={caughtFilter === 'caught'} />
            Only Caught
          </Grid>
          <Grid
            item
            onClick={() =>
              handleCaughtFilterChange(
                'uncaught',
                caughtFilter,
                setCaughtFilter,
              )
            }
            className="hover"
          >
            <Checkbox checked={caughtFilter === 'uncaught'} />
            Only Uncaught
          </Grid>
        </Grid>
      </Grid>

      {caughtFilter === 'caught' ? (
        <Grid item sx={{ mt: -4 }}>
          <Grid container spacing={1}>
            <Grid
              item
              onClick={() =>
                handleCaughtFilterChange(
                  'caught',
                  caughtTenFilter,
                  setCaughtTenFilter,
                )
              }
              className="hover"
            >
              <Checkbox
                checked={caughtTenFilter === 'caught'}
                color="secondary"
              />
              Only Caught Ten
            </Grid>
            <Grid
              item
              onClick={() =>
                handleCaughtFilterChange(
                  'uncaught',
                  caughtTenFilter,
                  setCaughtTenFilter,
                )
              }
              className="hover"
            >
              <Checkbox
                checked={caughtTenFilter === 'uncaught'}
                color="secondary"
              />
              Only Caught Less Than Ten
            </Grid>
          </Grid>
        </Grid>
      ) : null}

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
