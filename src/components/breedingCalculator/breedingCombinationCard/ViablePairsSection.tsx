import { Box, Typography, Stack } from '@mui/material';

import { ViablePairCard } from '@components/breedingCalculator';

type Props = {
  viablePairs: ViablePair[];
};

export const ViablePairsSection = ({ viablePairs }: Props) => {
  if (viablePairs.length === 0) return null;

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Viable Pairs:
      </Typography>
      <Stack gap={1}>
        {viablePairs.map((pair, index) => (
          <ViablePairCard key={index} pair={pair} />
        ))}
      </Stack>
    </Box>
  );
};
