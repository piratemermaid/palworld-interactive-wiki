import { useState, useMemo } from 'react';
import { Card, CardContent, Grid } from '@mui/material';

import {
  BreedingCombinationHeader,
  BreedingCombinationActions,
  BreedingCombinationExpandedContent,
} from '@components/breedingCalculator';
import { getInstancesForPal } from '@utils/breeding';

type Props = {
  viableCombination: ViableCombination;
  allInstances: PalInstance[];
  traitFilter?: string[];
  targetPal?: PalName | null;
  onSavePair?: (pair: ViablePair) => void;
  savedPairIds?: Set<string>;
};

const getCardStyles = (hasViablePair: boolean) => ({
  border: hasViablePair ? '2px solid' : '1px solid',
  borderColor: hasViablePair ? 'success.main' : 'divider',
  bgcolor: hasViablePair ? 'action.hover' : 'background.paper',
});

export const BreedingCombinationCard = ({
  viableCombination,
  allInstances,
  traitFilter = [],
  targetPal,
  onSavePair,
  savedPairIds,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { combination, viablePairs, hasViablePair } = viableCombination;

  const toggleExpanded = () => setExpanded(!expanded);

  // Calculate which traits are matching and their counts
  const parent1Instances = getInstancesForPal(
    combination.parent1,
    allInstances,
  );
  const parent2Instances = getInstancesForPal(
    combination.parent2,
    allInstances,
  );

  // Find matching traits and count occurrences
  const matchingTraits = useMemo(() => {
    if (traitFilter.length === 0) return [];

    const traitCounts = new Map<
      string,
      { parent1: boolean; parent2: boolean }
    >();

    // Check parent1 instances
    parent1Instances.forEach((instance) => {
      traitFilter.forEach((trait) => {
        if (instance.traits.includes(trait)) {
          const current = traitCounts.get(trait) || {
            parent1: false,
            parent2: false,
          };
          traitCounts.set(trait, { ...current, parent1: true });
        }
      });
    });

    // Check parent2 instances
    parent2Instances.forEach((instance) => {
      traitFilter.forEach((trait) => {
        if (instance.traits.includes(trait)) {
          const current = traitCounts.get(trait) || {
            parent1: false,
            parent2: false,
          };
          traitCounts.set(trait, { ...current, parent2: true });
        }
      });
    });

    // Return traits that match, with their counts
    return Array.from(traitCounts.entries())
      .filter(([_, counts]) => counts.parent1 || counts.parent2)
      .map(([trait, counts]) => ({
        trait,
        count: (counts.parent1 ? 1 : 0) + (counts.parent2 ? 1 : 0),
      }));
  }, [traitFilter, parent1Instances, parent2Instances]);

  return (
    <Card sx={getCardStyles(hasViablePair)}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <BreedingCombinationHeader
              combination={combination}
              hasViablePair={hasViablePair}
              traitFilter={traitFilter}
              matchingTraits={matchingTraits}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ textAlign: { xs: 'left', sm: 'right' } }}
          >
            <BreedingCombinationActions
              hasViablePair={hasViablePair}
              expanded={expanded}
              onToggleExpanded={toggleExpanded}
            />
          </Grid>

          <Grid item xs={12}>
            <BreedingCombinationExpandedContent
              combination={combination}
              allInstances={allInstances}
              viablePairs={viablePairs}
              expanded={expanded}
              traitFilter={traitFilter}
              targetPal={targetPal}
              onSavePair={onSavePair}
              savedPairIds={savedPairIds}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
