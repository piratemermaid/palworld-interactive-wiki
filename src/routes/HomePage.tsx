import { Grid, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Grid container direction="column" spacing={2} sx={{ mt: 2 }}>
      <Grid item>
        <Typography variant="h2">
          hi, welcome to my dumb little palworld app
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          the idea is to add some QOL while playing, hopefully the devs add this
          stuff into the game
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">planned next things:</Typography>
        <Typography variant="body2">
          - Filter work suitability by level
        </Typography>
        <Typography variant="body2">
          - Track your Pals so the ones you don't have won't show up
        </Typography>
        <Typography variant="body2">
          - Track how much of each Pal you've caught
        </Typography>
        <Typography variant="body2">
          - List of passive skills and what they mean
        </Typography>
      </Grid>
    </Grid>
  );
}
