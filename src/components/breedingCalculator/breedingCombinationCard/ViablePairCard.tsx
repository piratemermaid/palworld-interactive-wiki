import { Card, Stack, Typography } from '@mui/material';

import { BreedingPalChip } from './BreedingPalChip';
import { TraitChip } from '../TraitChip';
import type { ViablePair } from '../../../types/palInstance';

type Props = {
  pair: ViablePair;
};

export const ViablePairCard = ({ pair }: Props) => {
  const traits = [...pair.instance1.traits, ...pair.instance2.traits];

  return (
    <Card variant="outlined" sx={{ p: 1, bgcolor: 'action.selected' }}>
      <Stack gap={1}>
        <Stack direction="row" gap={0.5}>
          <BreedingPalChip
            palName={pair.instance1.palName}
            gender={pair.instance1.gender}
          />
          <Typography variant="body2">+</Typography>
          <BreedingPalChip
            palName={pair.instance2.palName}
            gender={pair.instance2.gender}
          />
        </Stack>

        <Stack direction="row" alignItems="center" gap={0.5}>
          <Typography variant="caption" color="text.secondary">
            Traits:
          </Typography>
          {traits.map((trait) => (
            <TraitChip key={trait} trait={trait} />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};
