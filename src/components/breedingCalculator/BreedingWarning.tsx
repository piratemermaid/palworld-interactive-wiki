import { Typography } from '@mui/material';

type Props = {
  message: string;
};

export const BreedingWarning = ({ message }: Props) => {
  return (
    <Typography variant="body1" color="text.secondary">
      {message}
    </Typography>
  );
};
