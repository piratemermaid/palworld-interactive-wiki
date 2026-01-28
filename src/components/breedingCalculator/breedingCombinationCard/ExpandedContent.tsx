import { Grid, Collapse, Stack } from '@mui/material';

import { ParentInstancesSection } from './ParentInstancesSection';
import { ViablePairsSection } from './ViablePairsSection';
import { getInstancesForPal } from '../../../utils/breeding';
import type { PalInstance } from '../../../types/palInstance';
import type { BreedingCombination } from '../../../data/breeding';

type Props = {
  combination: BreedingCombination;
  allInstances: PalInstance[];
  viablePairs: Array<{
    instance1: PalInstance;
    instance2: PalInstance;
  }>;
  expanded: boolean;
  traitFilter?: string[];
};

/**
 * Check if an instance has at least one of the required traits
 */
const hasAtLeastOneTrait = (instance: PalInstance, requiredTraits: string[]): boolean => {
  if (requiredTraits.length === 0) return true;
  return requiredTraits.some((trait) => instance.traits.includes(trait));
};

export const BreedingCombinationExpandedContent = ({
  combination,
  allInstances,
  viablePairs,
  expanded,
  traitFilter = [],
}: Props) => {
  const allParent1Instances = getInstancesForPal(
    combination.parent1,
    allInstances,
  );
  const allParent2Instances = getInstancesForPal(
    combination.parent2,
    allInstances,
  );

  // Filter instances by trait filter (at least one trait must match)
  const parent1Instances = allParent1Instances.filter((instance) =>
    hasAtLeastOneTrait(instance, traitFilter),
  );
  const parent2Instances = allParent2Instances.filter((instance) =>
    hasAtLeastOneTrait(instance, traitFilter),
  );

  // Filter viable pairs - at least one instance must have at least one matching trait
  const filteredViablePairs = viablePairs.filter(
    (pair) =>
      hasAtLeastOneTrait(pair.instance1, traitFilter) ||
      hasAtLeastOneTrait(pair.instance2, traitFilter),
  );

  return (
    <Collapse in={expanded}>
      <Stack gap={2}>
        <Grid container spacing={2}>
          <ParentInstancesSection
            palName={combination.parent1}
            instances={parent1Instances}
          />
          <ParentInstancesSection
            palName={combination.parent2}
            instances={parent2Instances}
          />
        </Grid>

        {filteredViablePairs.length > 0 && (
          <ViablePairsSection viablePairs={filteredViablePairs} />
        )}
      </Stack>
    </Collapse>
  );
};
