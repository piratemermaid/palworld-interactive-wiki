import React from 'react';
import { map } from 'lodash';
import {
  Box,
  Card,
  FormLabel,
  Grid,
  IconButton,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ClearIcon from '@mui/icons-material/Clear';

import PalWorkSuitabilityCard from './PalWorkSuitabilityCard';
import WorkSuitabilityImage from './WorkSuitabilityImage';
import PAL_WORK_SUITABILITY from '../../data/palWorkSuitability';
import { useStore } from '../../store';
import { WORK_SUITABILITY_TYPES } from '../../constants/workSuitability';
import { PAL_DATA } from '../../data/pals';
import { filterObject } from '../../utils/object';
import type {
  WorkSuitability,
  PalWorkSuitability,
} from '../../types/workSuitability';

type FilterName = 'workSuitability' | 'levels' | 'havePal';

type Filters = {
  workSuitability: WorkSuitability[];
  levels: number[];
  havePal: boolean;
};

export default function PalWorkSuitability() {
  const [filters, setFilters] = React.useState<Filters>({
    workSuitability: [],
    levels: [],
    havePal: false,
  });

  const userPals = useStore((store) => store.userPals);

  const handleSelectFilter = (
    event: React.MouseEvent,
    filterName: FilterName,
    value: any,
  ) => {
    if (filterName === 'havePal') {
      setFilters({ ...filters, havePal: !filters.havePal });
      return;
    }

    const selectMultiple = event.shiftKey;

    const currentFilters = filters[filterName];

    let newFilters = currentFilters;

    if (!currentFilters.length) {
      newFilters = [value];
      // @ts-expect-error idc
    } else if (currentFilters.includes(value)) {
      // @ts-expect-error idc
      newFilters = currentFilters.filter((filter) => filter !== value);
    } else if (!selectMultiple) {
      newFilters = [value];
    } else {
      // @ts-expect-error idc
      newFilters.push(value);
    }

    setFilters({ ...filters, [filterName]: newFilters });
  };

  const clearFilters = (filterName: FilterName) => {
    setFilters({ ...filters, [filterName]: [] });
  };

  const getFilteredPals = () => {
    let filteredPals = {};

    if (filters.havePal) {
      if (!userPals.length) return {};

      map(PAL_WORK_SUITABILITY, (workSuitability, palName) => {
        if (userPals.includes(palName)) {
          // @ts-expect-error // TODO
          filteredPals[palName] = workSuitability;
        }
      });
    }

    if (filters.workSuitability.length) {
      const objectToFilter = !Object.keys(filteredPals).length
        ? PAL_WORK_SUITABILITY
        : filteredPals;

      filteredPals = filterObject(
        objectToFilter,
        (workSuitability: PalWorkSuitability[]) =>
          workSuitability.find((palWork) =>
            filters.workSuitability.includes(palWork.name),
          ),
      );
    }

    return Object.keys(filteredPals).length
      ? filteredPals
      : PAL_WORK_SUITABILITY;
  };

  const palsToDisplay = getFilteredPals();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">Pal Work Suitability</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Filters{' '}
          <Tooltip title="Shift click work suitabilities to select multiple">
            <IconButton sx={{ position: 'relative', right: 8, bottom: 5 }}>
              <InfoIcon color="secondary" sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
          <Box
            onClick={(event) =>
              handleSelectFilter(event, 'havePal', !filters.havePal)
            }
          >
            <Switch
              inputProps={{ 'aria-label': 'Dark mode' }}
              checked={filters.havePal}
            />
            <FormLabel sx={{ '&:hover': { cursor: 'pointer' } }}>
              Only Pals I Have
            </FormLabel>
          </Box>
        </Typography>

        {WORK_SUITABILITY_TYPES.map((name) => (
          <span
            onClick={(event) =>
              handleSelectFilter(event, 'workSuitability', name)
            }
            key={name}
          >
            <WorkSuitabilityImage
              name={name}
              customStyles={{
                cursor: 'pointer',
                opacity:
                  !filters.workSuitability.length ||
                  filters.workSuitability.includes(name)
                    ? 1
                    : 0.5,
              }}
            />
          </span>
        ))}
        <IconButton
          disabled={!filters.workSuitability.length}
          sx={{ position: 'relative', bottom: 14 }}
          onClick={() => clearFilters('workSuitability')}
        >
          <ClearIcon />
        </IconButton>
      </Grid>

      <Grid item>
        <Grid container spacing={2} alignItems="stretch">
          {map(
            palsToDisplay,
            (palWorkSuitability: PalWorkSuitability[], palName: string) => {
              const palData = PAL_DATA[palName];
              // Skip if pal data doesn't exist
              if (!palData) {
                return null;
              }

              return (
                <Grid item key={palName} lg={2} md={4} sm={6} xs={12}>
                  <Card sx={{ p: 2, height: '100%' }}>
                    <Typography variant="body2" sx={{ float: 'right' }}>
                      {palData.paldeckNo}
                    </Typography>
                    <Typography variant="h6">{palName}</Typography>
                    {palWorkSuitability.map((palWorkSuitability) => {
                      return (
                        <PalWorkSuitabilityCard
                          key={String(palWorkSuitability.name)}
                          palWorkSuitability={palWorkSuitability}
                          isActive={filters.workSuitability.includes(
                            palWorkSuitability.name,
                          )}
                        />
                      );
                    })}
                  </Card>
                </Grid>
              );
            },
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
