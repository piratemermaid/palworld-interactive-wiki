import { Card, Typography, Stack } from '@mui/material';

import { BreedingPalChip, TraitChip } from '@components/breedingCalculator';

type Props = {
  instance: PalInstance;
  compact?: boolean;
};

export const InstanceDisplayCard = ({ instance, compact = false }: Props) => {
  return (
    <Card variant="outlined" sx={{ p: 1 }}>
      <Stack sx={{ alignItems: 'center', gap: compact ? 0.5 : 1 }}>
        <BreedingPalChip palName={instance.palName} gender={instance.gender} />
      </Stack>
      {instance.traits.length > 0 ? (
        <Stack direction="row" flexWrap="wrap" gap={0.5}>
          {instance.traits.map((trait) => (
            <TraitChip key={trait} trait={trait} />
          ))}
        </Stack>
      ) : (
        <Typography variant="caption" color="text.secondary">
          No traits
        </Typography>
      )}
    </Card>
  );
};
