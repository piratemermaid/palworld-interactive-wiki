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
        <TodoItem text="Filter work suitability by level" />
        <TodoItem text="Track your Pals so the ones you don't have won't show up" />
        <TodoItem text="Track how much of each Pal you've caught" />
        <TodoItem text="List of passive skills and what they mean" />
      </Grid>
    </Grid>
  );
}

type TodoItemProps = { text: string };

const TodoItem = ({ text }: TodoItemProps) => (
  <Typography variant="body2">- {text}</Typography>
);
