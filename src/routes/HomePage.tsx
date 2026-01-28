import { Grid, Typography } from '@mui/material';

const todoItems = [
  'Make UI not trash if I have the energy for it',
  'Fill out breeding data - will prob do as I breed pals in my game instead of all at once',
  'Add indicators for good and bad traits on breeding page',
  'Add filters for traits on breeding page',
  'Sort/filter work suitability by level',
  'List of pals with their paldeck numbers, skills, drops, etc.',
  'Add passive skill filtering/sortability',
];

const recentUpdates = [
  'First 2026 update: added breeding page for finding good breeding combinations - currently only has Anubis data lol',
];

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
        <Typography variant="h6">
          planned next things:{' '}
          <Typography component="span" color="error.main">
            *
          </Typography>
        </Typography>
        {todoItems.map((text, index) => (
          <TodoItem key={index} text={text} />
        ))}
      </Grid>
      <Grid item>
        <Typography variant="h6">recently updated:</Typography>
        {recentUpdates.map((text, index) => (
          <TodoItem key={index} text={text} />
        ))}
      </Grid>
      <Grid item>
        <Typography variant="body2" color="error.main">
          * this is from a long time ago so priorities will shift with the
          updated game
        </Typography>
      </Grid>
    </Grid>
  );
}

type TodoItemProps = { text: string };

const TodoItem = ({ text }: TodoItemProps) => (
  <Typography variant="body2">- {text}</Typography>
);
