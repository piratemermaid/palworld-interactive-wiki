import { map } from 'lodash';
import { Card, Grid, Typography } from '@mui/material';

import PAL_WORK_SUITABILITY from '../data/palWorkSuitability';
import type { PalWorkSuitabilityList } from '../types/workSuitability';
import { WORK_SUITABILITY_TYPES } from '../constants/workSuitability';
import WorkSuitabilityImage from './WorkSuitabilityImage';

export default function PalWorkSuitability() {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">Pal Work Suitability</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Filters
        </Typography>
        {WORK_SUITABILITY_TYPES.map((name) => (
          <WorkSuitabilityImage name={name} isHoverable={true} />
        ))}
      </Grid>

      <Grid item>
        <Grid container spacing={2} alignItems="stretch">
          {map(
            PAL_WORK_SUITABILITY,
            (palWorkSuitability: PalWorkSuitabilityList[], palName: string) => {
              return (
                <Grid item key={palName} lg={2} md={3} sm={4} xs={12}>
                  <Card sx={{ p: 2, height: '100%' }}>
                    <Typography variant="h6">{palName}</Typography>
                    {palWorkSuitability.map(({ name, level, product }) => {
                      const untypedName = String(name);

                      return (
                        <Grid container spacing={0.5}>
                          <Grid item sx={{ width: 12 }}>
                            {String(level)}
                          </Grid>
                          <Grid item sx={{ width: 32 }}>
                            <Typography
                              key={untypedName}
                              variant="body1"
                              sx={{ textAlign: 'left' }}
                            >
                              {/* @ts-expect-error - TS why are you like this */}
                              <WorkSuitabilityImage name={name} size={26} />
                            </Typography>
                          </Grid>
                          <Grid item>
                            {untypedName}
                            {product ? ` (${product})` : null}
                          </Grid>
                        </Grid>
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
