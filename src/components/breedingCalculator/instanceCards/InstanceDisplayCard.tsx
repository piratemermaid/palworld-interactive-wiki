import { Card, Typography, Stack } from '@mui/material';

import { GenderChip, TraitChip } from '@components/breedingCalculator';

type Props = {
  instance: PalInstance;
};

export const InstanceDisplayCard = ({ instance }: Props) => {
  return (
    <Card sx={{ p: 1 }}>
      <Stack direction="row" alignItems="center" gap={0.5}>
        <GenderChip gender={instance.gender} />
        {instance.traits.length > 0 ? (
          <Stack direction="row" flexWrap="wrap" gap={0.5} sx={{ pl: 0.5 }}>
            {instance.traits.map((trait) => (
              <TraitChip key={trait} trait={trait} />
            ))}
          </Stack>
        ) : (
          <Typography variant="caption" color="text.secondary">
            No traits
          </Typography>
        )}
      </Stack>
    </Card>
  );
};
