import { map } from 'lodash';
import { Card, Grid, Typography } from '@mui/material';

import PAL_WORK_SUITABILITY from '../data/palWorkSuitability';
import type { PalWorkSuitabilityList } from '../types/workSuitability';

export default function PalWorkSuitability() {
  return (
    <>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Pal Work Suitability
      </Typography>
      <Grid container spacing={2} alignItems="stretch">
        {map(
          PAL_WORK_SUITABILITY,
          (palWorkSuitability: PalWorkSuitabilityList[], palName: string) => {
            return (
              <Grid item key={palName} lg={2} md={3} sm={4} xs={12}>
                <Card sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6">{palName}</Typography>
                  {palWorkSuitability.map(
                    ({ name: typedName, level, product }) => {
                      const name = String(typedName);

                      return (
                        <Grid container spacing={0.5}>
                          <Grid item sx={{ width: 12 }}>
                            {String(level)}
                          </Grid>
                          <Grid item sx={{ width: 32 }}>
                            <Typography
                              key={name}
                              variant="body1"
                              sx={{ textAlign: 'left' }}
                            >
                              <img
                                src={`/images/workSuitability/${name.replaceAll(' ', '_')}_Icon.webp`}
                                title={name}
                                alt={name}
                                style={{
                                  height: 26,
                                  width: 26,
                                }}
                              />
                            </Typography>
                          </Grid>
                          <Grid item>
                            {name}
                            {product ? ` (${product})` : null}
                          </Grid>
                        </Grid>
                      );
                    },
                  )}
                </Card>
              </Grid>
            );
          },
        )}
      </Grid>
    </>
  );
}
