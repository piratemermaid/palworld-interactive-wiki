import { Card, Grid, Typography } from '@mui/material';
import { map } from 'lodash';

import { PAL_DATA } from '../data/pals';

export default function PalDataPage() {
  return (
    <>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Pal List
      </Typography>
      <Grid container spacing={2}>
        {map(PAL_DATA, (palData, palName) => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6">{palName}</Typography>
                <Typography variant="body2">#{palData.paldeckNo}</Typography>
                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                  Skill: TODO
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'left' }}>
                  Drops: TODO
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
