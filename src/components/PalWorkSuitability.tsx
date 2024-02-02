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
                {palWorkSuitability.map(
                  ({ name: typedName, level, product }) => {
                    const name = String(typedName);

                    return (
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
                            position: 'relative',
                            top: 6,
                            right: 2,
                          }}
                        />
                        {name} {String(level)} {product ? `(${product})` : null}
                      </Typography>
                    );
                  },
                )}
              </Grid>
            );
          },
        )}
      </Grid>
    </>
  );
}
