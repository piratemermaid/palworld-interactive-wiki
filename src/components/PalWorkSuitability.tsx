import { map } from 'lodash';
import { Grid, Typography } from '@mui/material';

import PAL_WORK_SUITABILITY from '../data/palWorkSuitability';
import type { PalWorkSuitabilityList } from '../types/workSuitability';

export default function PalWorkSuitability() {
  return (
    <>
      <Typography variant="h2">Pal Work Suitability</Typography>
      <Grid container spacing={2}>
        {map(
          PAL_WORK_SUITABILITY,
          (palWorkSuitability: PalWorkSuitabilityList[], palName: string) => {
            return (
              <Grid item key={palName} lg={2} md={3} sm={4} xs={12}>
                <Typography variant="h6">{palName}</Typography>
                {palWorkSuitability.map((workSuitability) => {
                  return (
                    // @ts-expect-error - bruh idk what TS is doing here
                    <Typography variant="body1" key={workSuitability.name}>
                      {workSuitability.name} {workSuitability.level}{' '}
                      {workSuitability.product
                        ? `(${workSuitability.product})`
                        : null}
                    </Typography>
                  );
                })}
              </Grid>
            );
          },
        )}
      </Grid>
    </>
  );
}
