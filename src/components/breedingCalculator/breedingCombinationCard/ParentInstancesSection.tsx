import { Grid, Stack, Typography } from '@mui/material';

import { InstanceDisplayCard } from '@components/breedingCalculator';

type Props = {
  palName: PalName;
  instances: PalInstance[];
};

export const ParentInstancesSection = ({ palName, instances }: Props) => {
  return (
    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        {palName} Traits:
      </Typography>
      {instances.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No instances
        </Typography>
      ) : (
        <Stack gap={1}>
          {instances.map((instance) => (
            <InstanceDisplayCard key={instance.id} instance={instance} />
          ))}
        </Stack>
      )}
    </Grid>
  );
};
