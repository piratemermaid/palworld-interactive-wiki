import { Box, Typography, Stack } from '@mui/material';

import { ViablePairCard } from '@components/breedingCalculator';

type Props = {
  viablePairs: ViablePair[];
  targetPal?: PalName | null;
  onSavePair?: (pair: ViablePair) => void;
  savedPairIds?: Set<string>;
};

export const ViablePairsSection = ({
  viablePairs,
  targetPal,
  onSavePair,
  savedPairIds,
}: Props) => {
  if (viablePairs.length === 0) return null;

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Viable Pairs:
      </Typography>
      <Stack gap={1}>
        {viablePairs.map((pair, index) => {
          const pairId = pair.instance1.id + pair.instance2.id;
          const isSaved = savedPairIds?.has(pairId) ?? false;
          return (
            <ViablePairCard
              key={index}
              pair={pair}
              targetPal={targetPal}
              onSave={onSavePair}
              isSaved={isSaved}
            />
          );
        })}
      </Stack>
    </Box>
  );
};
