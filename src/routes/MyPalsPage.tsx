import React from 'react';
import { Checkbox, Grid, Typography } from '@mui/material';

import { MyPalCard } from '@components/myPals';
import { useStore } from '@store';
import { PAL_NAME_LIST, PAL_DATA } from '@data';

type CaughtFilter = 'caught' | 'uncaught' | null;
type CaughtTenFilter = 'caught' | 'uncaught' | null;

const parsePaldeckNo = (paldeckNo: string) => {
  // Examples: "005", "005b"
  const match = /^(\d+)([a-z]*)$/i.exec(paldeckNo.trim());
  if (!match) return { num: Number.NaN, suffix: paldeckNo };
  return { num: Number(match[1]), suffix: match[2]?.toLowerCase() ?? '' };
};

const comparePaldeckNo = (a: string, b: string) => {
  const pa = parsePaldeckNo(a);
  const pb = parsePaldeckNo(b);

  if (!Number.isNaN(pa.num) && !Number.isNaN(pb.num) && pa.num !== pb.num) {
    return pa.num - pb.num;
  }

  // If same number (or unparsable), compare suffix ("" before "b")
  if (pa.suffix !== pb.suffix) return pa.suffix.localeCompare(pb.suffix);

  // Fallback: full string
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
};

export const MyPalsPage = () => {
  const userPals = useStore((store) => store.userPals);
  const userPalsCaughtTen = useStore((store) => store.userPalsCaughtTen);

  const caughtFilter = useStore((store) => store.myPalsCaughtFilter);
  const setCaughtFilter = useStore((store) => store.setMyPalsCaughtFilter);

  const caughtTenFilter = useStore((store) => store.myPalsCaughtTenFilter);
  const setCaughtTenFilter = useStore(
    (store) => store.setMyPalsCaughtTenFilter,
  );

  const showUncaughtPalNames = useStore((store) => store.showUncaughtPalNames);
  const setShowUncaughtPalNames = useStore(
    (store) => store.setShowUncaughtPalNames,
  );

  const showEventPals = useStore((store) => store.showEventPals);
  const setShowEventPals = useStore((store) => store.setShowEventPals);

  const sortBy = useStore((store) => store.myPalsSortBy);
  const setSortBy = useStore((store) => store.setMyPalsSortBy);

  const handleCaughtFilterChange = (
    selectedFilter: CaughtFilter,
    filter: CaughtFilter | CaughtTenFilter,
    updateFn: (next: CaughtFilter | CaughtTenFilter) => void,
  ) => {
    if (selectedFilter === filter) {
      updateFn(null);
    } else {
      updateFn(selectedFilter);
    }
  };

  const filteredPals = React.useMemo(() => {
    let pals = PAL_NAME_LIST;

    // Filter out event pals (paldeckNo -1) unless showEventPals is enabled
    if (!showEventPals) {
      pals = pals.filter((pal) => {
        const palData = PAL_DATA[pal];
        return palData?.paldeckNo !== '-1';
      });
    }

    // Apply caught/uncaught filter
    if (caughtFilter) {
      pals = pals.filter((pal) => {
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
    }

    return pals;
  }, [
    showEventPals,
    caughtFilter,
    caughtTenFilter,
    userPals,
    userPalsCaughtTen,
  ]);

  const palsToDisplay = React.useMemo(() => {
    const pals = [...filteredPals];

    if (sortBy === 'name') {
      pals.sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' }),
      );
      return pals;
    }

    // Default: Paldeck No
    pals.sort((a, b) => {
      const aData = PAL_DATA[a];
      const bData = PAL_DATA[b];
      const aNo = aData?.paldeckNo;
      const bNo = bData?.paldeckNo;

      // Put missing data at the end
      if (!aNo && !bNo)
        return a.localeCompare(b, undefined, { sensitivity: 'base' });
      if (!aNo) return 1;
      if (!bNo) return -1;

      // Handle event pals (-1) - sort by eventNo if both are event pals
      if (aNo === '-1' && bNo === '-1') {
        const aEventNo = aData?.eventNo ?? 0;
        const bEventNo = bData?.eventNo ?? 0;
        if (aEventNo !== bEventNo) return aEventNo - bEventNo;
        return a.localeCompare(b, undefined, { sensitivity: 'base' });
      }

      // Put event pals (-1) at the end, after regular pals
      if (aNo === '-1') return 1;
      if (bNo === '-1') return -1;

      const byNo = comparePaldeckNo(aNo, bNo);
      if (byNo !== 0) return byNo;
      return a.localeCompare(b, undefined, { sensitivity: 'base' });
    });

    return pals;
  }, [filteredPals, sortBy]);

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">My Pals</Typography>
      </Grid>

      <Grid item sx={{ textAlign: 'left' }}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item>
            <Grid container spacing={1}>
              <Grid
                item
                onClick={() =>
                  handleCaughtFilterChange(
                    'caught',
                    caughtFilter,
                    setCaughtFilter,
                  )
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
              <Grid
                item
                onClick={() => setShowEventPals(!showEventPals)}
                className="hover"
              >
                <Checkbox checked={showEventPals} />
                Include Event Pals (Terraria)
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container spacing={1} justifyContent="flex-end">
              <Grid
                item
                onClick={() => setShowUncaughtPalNames(!showUncaughtPalNames)}
                className="hover"
              >
                <Checkbox checked={showUncaughtPalNames} />
                Show Uncaught Pal Names
              </Grid>
              <Grid
                item
                onClick={() => setSortBy('paldeckNo')}
                className="hover"
              >
                <Checkbox checked={sortBy === 'paldeckNo'} />
                Sort: Paldeck No
              </Grid>
              <Grid item onClick={() => setSortBy('name')} className="hover">
                <Checkbox checked={sortBy === 'name'} />
                Sort: Name
              </Grid>
            </Grid>
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
};
