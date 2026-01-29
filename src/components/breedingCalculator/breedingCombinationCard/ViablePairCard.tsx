import { Card, Stack, Typography, IconButton, Tooltip } from '@mui/material';
import { BookmarkAdd as BookmarkAddIcon, Bookmark as BookmarkIcon } from '@mui/icons-material';

import { BreedingPalChip, TraitChip } from '@components/breedingCalculator';

type Props = {
  pair: ViablePair;
  targetPal?: PalName | null;
  onSave?: (pair: ViablePair) => void;
  isSaved?: boolean;
};

export const ViablePairCard = ({ pair, targetPal, onSave, isSaved }: Props) => {
  const traits = [...pair.instance1.traits, ...pair.instance2.traits];

  return (
    <Card variant="outlined" sx={{ p: 1, bgcolor: 'action.selected' }}>
      <Stack gap={1}>
        <Stack direction="row" gap={0.5} alignItems="center" justifyContent="space-between">
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
          {targetPal && onSave && (
            <Tooltip title={isSaved ? 'Already saved' : 'Save to breeding plan'}>
              <IconButton
                size="small"
                onClick={() => onSave(pair)}
                disabled={isSaved}
                color={isSaved ? 'primary' : 'default'}
              >
                {isSaved ? <BookmarkIcon /> : <BookmarkAddIcon />}
              </IconButton>
            </Tooltip>
          )}
        </Stack>

        <Stack direction="row" alignItems="center" gap={0.5} flexWrap="wrap">
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
