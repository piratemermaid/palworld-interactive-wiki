import { Stack, Typography, Box } from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';

import type { BreedingCombination } from '../../../data/breeding';

type MatchingTrait = {
  trait: string;
  count: number;
};

type Props = {
  combination: BreedingCombination;
  hasViablePair: boolean;
  traitFilter?: string[];
  matchingTraits?: MatchingTrait[];
};

export const BreedingCombinationHeader = ({
  combination,
  hasViablePair,
  traitFilter = [],
  matchingTraits = [],
}: Props) => {
  const hasActiveFilter = traitFilter.length > 0;

  return (
    <Stack spacing={0.5}>
      <Stack direction="row" alignItems="center" gap={1}>
        {hasViablePair ? (
          <CheckCircleIcon color="success" />
        ) : (
          <CancelIcon color="error" />
        )}
        <Typography variant="h6" color="text.primary">
          {combination.parent1} + {combination.parent2}
        </Typography>
        {hasActiveFilter && matchingTraits.length > 0 && (
          <Stack direction="row" flexWrap="wrap" gap={0.5}>
            <Typography variant="caption" color="text.secondary">
              Matching traits:
            </Typography>
            <>
              {matchingTraits.map(({ trait, count }) => (
                <Typography
                  key={trait}
                  variant="caption"
                  color="text.secondary"
                >
                  {trait} {count === 2 ? 'x2' : ''}
                </Typography>
              ))}
            </>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
