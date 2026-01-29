import { useMemo } from 'react';
import {
  Stack,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Box,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  BookmarkRemove as BookmarkRemoveIcon,
} from '@mui/icons-material';

import { ViablePairCard } from './breedingCombinationCard/ViablePairCard';
import { useStore } from '@store';

type Props = {
  targetPal: PalName | null;
};

export const BreedingPlan = ({ targetPal }: Props) => {
  const breedingPlans = useStore((store) => store.breedingPlans);
  const removeBreedingPlanPair = useStore((store) => store.removeBreedingPlanPair);
  const clearBreedingPlan = useStore((store) => store.clearBreedingPlan);

  const savedPairs = useMemo(() => {
    if (!targetPal) return [];
    return breedingPlans[targetPal] || [];
  }, [targetPal, breedingPlans]);

  const handleRemovePair = (pair: ViablePair) => {
    if (!targetPal) return;
    const pairId = pair.instance1.id + pair.instance2.id;
    removeBreedingPlanPair(targetPal, pairId);
  };

  const handleClearPlan = () => {
    if (!targetPal) return;
    clearBreedingPlan(targetPal);
  };

  if (!targetPal) {
    return (
      <Typography variant="body1" color="text.secondary">
        Select a pal above to view and manage your breeding plan.
      </Typography>
    );
  }

  if (savedPairs.length === 0) {
    return (
      <Typography variant="body1" color="text.secondary">
        No pairs saved for {targetPal}. Save pairs from the Breeding Calculator
        tab to build your breeding plan.
      </Typography>
    );
  }

  return (
    <Stack spacing={2}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">
          Breeding Plan for {targetPal} ({savedPairs.length} pair
          {savedPairs.length !== 1 ? 's' : ''})
        </Typography>
        <Tooltip title="Clear all pairs">
          <IconButton
            onClick={handleClearPlan}
            color="error"
            size="small"
          >
            <BookmarkRemoveIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Stack spacing={2}>
        {savedPairs.map((pair, index) => {
          const pairId = pair.instance1.id + pair.instance2.id;
          return (
            <Card key={pairId} variant="outlined">
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <ViablePairCard pair={pair} />
                  </Box>
                  <Tooltip title="Remove from plan">
                    <IconButton
                      onClick={() => handleRemovePair(pair)}
                      color="error"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
};
