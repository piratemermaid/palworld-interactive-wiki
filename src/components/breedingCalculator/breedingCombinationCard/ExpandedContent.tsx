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
  hasViablePair: boolean;
  expanded: boolean;
};

export const BreedingCombinationExpandedContent = ({
  combination,
  allInstances,
  viablePairs,
  hasViablePair,
  expanded,
}: Props) => {
  const parent1Instances = getInstancesForPal(
    combination.parent1,
    allInstances,
  );
  const parent2Instances = getInstancesForPal(
    combination.parent2,
    allInstances,
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

        {hasViablePair && <ViablePairsSection viablePairs={viablePairs} />}
      </Stack>
    </Collapse>
  );
};
