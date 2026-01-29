import { Typography } from '@mui/material';

type Props = {
  combination: BreedingCombination;
};

export const BreedingCombinationHeader = ({ combination }: Props) => {
  return (
    <Typography variant="h6" color="text.primary">
      {combination.parent1} + {combination.parent2}
    </Typography>
  );
};
