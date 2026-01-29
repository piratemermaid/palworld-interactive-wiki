import { Chip, IconButton, Stack } from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

type Props = {
  hasViablePair: boolean;
  expanded: boolean;
  onToggleExpanded: () => void;
};

export const BreedingCombinationActions = ({
  hasViablePair,
  expanded,
  onToggleExpanded,
}: Props) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="flex-end">
      <Chip
        label={hasViablePair ? 'Viable' : 'Not Viable'}
        color={hasViablePair ? 'success' : 'error'}
        size="small"
      />
      <IconButton size="small" onClick={onToggleExpanded} aria-label="expand">
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
    </Stack>
  );
};
