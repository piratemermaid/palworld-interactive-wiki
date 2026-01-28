import { Alert, Stack, Typography } from '@mui/material';

import type { PalName } from '../../types/pal';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

type Props = {
  selectedPal: PalName | null;
  hasBreedingData: boolean;
  hasAvailableCombinations: boolean;
  hasViableCombinations: boolean;
  viableCount: number;
};

export const BreedingAlerts = ({
  selectedPal,
  hasBreedingData,
  hasAvailableCombinations,
  hasViableCombinations,
  viableCount,
}: Props) => {
  if (!selectedPal) return null;

  return (
    <>
      {!hasBreedingData && (
        <Alert severity="info">
          No breeding data available for {selectedPal}. Breeding combinations
          need to be added to the breeding data file.
        </Alert>
      )}

      {hasBreedingData && !hasAvailableCombinations && (
        <Alert severity="warning">
          No available combinations found. You need to have both parent pals in
          your instances to see breeding combinations.
        </Alert>
      )}

      {hasBreedingData &&
        hasAvailableCombinations &&
        !hasViableCombinations && (
          <Alert severity="warning">
            You have the required parents, but none of your instances have
            compatible genders (need one Male and one Female).
          </Alert>
        )}

      {hasViableCombinations && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <CheckCircleIcon color="success" />
          <Typography variant="subtitle1" color="success.main">
            {viableCount} Viable Combination {viableCount !== 1 ? 's' : ''}
          </Typography>
        </Stack>
      )}
    </>
  );
};
