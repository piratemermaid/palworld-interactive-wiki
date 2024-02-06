import { Grid, Typography } from '@mui/material';

const todoItems = [
  'Sort/filter work suitability by level',
  'List of pals with their paldeck numbers, skills, drops, etc.',
  'Add passive skill filtering/sortability',
];

const recentUpdates = [
  'List of passive skills and what they mean',
  "Added tracking for pals you've caught 10 of",
  'Added tracking and filtering for pals you have obtained',
  'Added paldeck numbers so pals you want in your base can be located quicker in palbox',
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
        <Typography variant="h6">planned next things:</Typography>
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
    </Grid>
  );
}

type TodoItemProps = { text: string };

const TodoItem = ({ text }: TodoItemProps) => (
  <Typography variant="body2">- {text}</Typography>
);
