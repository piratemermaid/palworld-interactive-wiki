import React from 'react';
import { map } from 'lodash';
import { Card, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ClearIcon from '@mui/icons-material/Clear';

import PalWorkSuitabilityCard from './PalWorkSuitabilityCard';
import WorkSuitabilityImage from './WorkSuitabilityImage';
import PAL_WORK_SUITABILITY from '../../data/palWorkSuitability';
import { WORK_SUITABILITY_TYPES } from '../../constants/workSuitability';
import { PAL_DATA } from '../../data/pals';
import { filterObject } from '../../utils/object';
import type {
  PalWorkSuitability,
  WorkSuitability,
} from '../../types/workSuitability';

type FilterName = 'workSuitability' | 'levels';

type Filters = {
  workSuitability: WorkSuitability[];
  levels: number[];
};

export default function PalWorkSuitability() {
  const [filters, setFilters] = React.useState<Filters>({
    workSuitability: [],
    levels: [],
  });

  const handleSelectFilter = (
    event: React.MouseEvent,
    filterName: FilterName,
    value: any,
  ) => {
    const selectMultiple = event.shiftKey;

    const currentFilters = filters[filterName];

    let newFilters = currentFilters;

    if (!currentFilters.length) {
      newFilters = [value];
      // @ts-expect-error
    } else if (currentFilters.includes(value)) {
      // @ts-expect-error
      newFilters = currentFilters.filter((filter) => filter !== value);
    } else if (!selectMultiple) {
      newFilters = [value];
    } else {
      // @ts-expect-error
      newFilters.push(value);
    }

    setFilters({ ...filters, [filterName]: newFilters });
  };

  const clearFilters = (filterName: FilterName) => {
    setFilters({ ...filters, [filterName]: [] });
  };

  const palsToDisplay = filters.workSuitability.length
    ? filterObject(
        PAL_WORK_SUITABILITY,
        (workSuitability: PalWorkSuitability[]) =>
          workSuitability.find((palWork) =>
            filters.workSuitability.includes(palWork.name),
          ),
      )
    : PAL_WORK_SUITABILITY;

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">Pal Work Suitability</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Filters{' '}
          <Tooltip title="Shift click to select multiple">
            <IconButton sx={{ position: 'relative', right: 8, bottom: 5 }}>
              <InfoIcon color="secondary" sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        </Typography>
        {WORK_SUITABILITY_TYPES.map((name) => (
          <span
            onClick={(event) =>
              handleSelectFilter(event, 'workSuitability', name)
            }
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
