import { Card, Checkbox, Grid, Typography } from '@mui/material';

import { useStore } from '../store';
import { PAL_DATA, PAL_NAME_LIST } from '../data/pals';

export default function MyPalsPage() {
  const userPals = useStore((store) => store.userPals);
  const updateUserPals = useStore((store) => store.updateUserPals);

  return (
    <>
      <Typography variant="h2" sx={{ mb: 2 }}>
        My Pals
      </Typography>

      <Grid container spacing={2}>
        {PAL_NAME_LIST.map((palName) => {
          const palData = PAL_DATA[palName];

          const havePal = userPals.includes(palName);

          return (
            <Grid
              item
              key={palName}
              lg={2}
              md={3}
              sm={6}
              xs={12}
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => updateUserPals(palName)}
            >
              <Card sx={{ p: 2 }}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Checkbox checked={havePal} />{' '}
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      color={havePal ? 'primary' : ''}
                    >
                      #{palData.paldeckNo} {palName}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
