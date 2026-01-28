import { useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';

import { BreedingCombinationHeader } from './Header';
import { BreedingCombinationActions } from './Actions';
import { BreedingCombinationExpandedContent } from './ExpandedContent';
import type { PalInstance } from '../../../types/palInstance';
import type { ViableCombination } from '../../../utils/breeding';

type Props = {
  viableCombination: ViableCombination;
  allInstances: PalInstance[];
};

const getCardStyles = (hasViablePair: boolean) => ({
  border: hasViablePair ? '2px solid' : '1px solid',
  borderColor: hasViablePair ? 'success.main' : 'divider',
  bgcolor: hasViablePair ? 'action.hover' : 'background.paper',
});

export const BreedingCombinationCard = ({
  viableCombination,
  allInstances,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { combination, viablePairs, hasViablePair } = viableCombination;

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <Card sx={getCardStyles(hasViablePair)}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <BreedingCombinationHeader
              combination={combination}
              hasViablePair={hasViablePair}
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
              hasViablePair={hasViablePair}
              expanded={expanded}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
