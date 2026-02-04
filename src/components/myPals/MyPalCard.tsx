import { Card, Checkbox, Grid, Stack, Typography } from '@mui/material';

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
  const showUncaughtPalNames = useStore((store) => store.showUncaughtPalNames);

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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Checkbox
              checked={havePal}
              onChange={() => updateUserPals(palName)}
            />
            <Stack alignItems="flex-start">
              {havePal || showUncaughtPalNames ? (
                <>
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
                </>
              ) : (
                <Typography variant="body2">#{palData.paldeckNo}</Typography>
              )}
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Checkbox
              checked={haveCaughtTen}
              size="small"
              color="secondary"
              onChange={() => updateUserPalsCaughtTen(palName)}
            />
            <Typography variant="body2" sx={{ fontSize: 12, ml: -0.5 }}>
              Max
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );
};
