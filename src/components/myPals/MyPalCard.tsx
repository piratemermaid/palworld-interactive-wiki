import { Card, Checkbox, Grid, Typography } from '@mui/material';

import { useStore } from '@store';
import { PAL_DATA } from '@data/pals';

type Props = {
  palName: string;
};

export const MyPalCard = ({ palName }: Props) => {
  const userPals = useStore((store) => store.userPals);
  const updateUserPals = useStore((store) => store.updateUserPals);
  const userPalsCaughtTen = useStore((store) => store.userPalsCaughtTen);
  const updateUserPalsCaughtTen = useStore(
    (store) => store.updateUserPalsCaughtTen,
  );

  const palData = PAL_DATA[palName];

  if (!palData) {
    return null;
  }

  const havePal = userPals.includes(palName);
  const haveCaughtTen = userPalsCaughtTen.includes(palName);

  return (
    <Grid
      item
      key={palName}
      lg={2}
      md={3}
      sm={6}
      xs={12}
      sx={{ cursor: 'pointer' }}
    >
      <Card sx={{ p: 1 }}>
        <Grid
          container
          sx={{ textAlign: 'left' }}
          justifyContent="space-between"
        >
          <Grid item onClick={() => updateUserPals(palName)}>
            <Grid container>
              <Grid item>
                <Checkbox checked={havePal} />{' '}
              </Grid>
              <Grid item sx={{ position: 'relative', top: 6 }}>
                <Typography variant="body2" color={havePal ? 'primary' : ''}>
                  {palName}
                </Typography>
                <Typography
                  variant="body2"
                  color={havePal ? 'primary' : ''}
                  sx={{ fontSize: 12 }}
                >
                  #{palData.paldeckNo}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sx={{ float: 'left', fontSize: 12 }}
            onClick={() => updateUserPalsCaughtTen(palName)}
          >
            <Checkbox
              checked={haveCaughtTen}
              size="small"
              sx={{ position: 'relative', bottom: 2 }}
              color="secondary"
            />
            10
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
