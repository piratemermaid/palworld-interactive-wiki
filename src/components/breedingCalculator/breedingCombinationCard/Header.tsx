import { Stack, Typography } from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

import type { BreedingCombination } from '../../../data/breeding';

type Props = {
  combination: BreedingCombination;
  hasViablePair: boolean;
};

export const BreedingCombinationHeader = ({
  combination,
  hasViablePair,
}: Props) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {hasViablePair ? (
        <CheckCircleIcon color="success" />
      ) : (
        <CancelIcon color="error" />
      )}
      <Typography variant="h6" color="text.primary">
        {combination.parent1} + {combination.parent2}
      </Typography>
    </Stack>
  );
};
