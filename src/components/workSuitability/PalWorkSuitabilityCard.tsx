import { Grid, Typography } from '@mui/material';

import WorkSuitabilityImage from './WorkSuitabilityImage';
import type { PalWorkSuitability } from '../../types/workSuitability';

type Props = {
  palWorkSuitability: PalWorkSuitability;
};

export default function PalWorkSuitabilityCard({ palWorkSuitability }: Props) {
  const { name, level, product } = palWorkSuitability;

  return (
    <Grid container spacing={0.5}>
      <Grid item sx={{ width: 12 }}>
        <Typography variant="body2">{String(level)}</Typography>
      </Grid>
      <Grid item sx={{ width: 26 }}>
        <Typography key={name} variant="body2" sx={{ textAlign: 'left' }}>
          <WorkSuitabilityImage name={name} size={22} />
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {name}
          {product ? ` (${product})` : null}
        </Typography>
      </Grid>
    </Grid>
  );
}
