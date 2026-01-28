import { Chip } from '@mui/material';

import { getGenderColor } from '../../../utils/breeding';
import type { PalName } from '../../../types/pal';
import type { Gender } from '../../../types/palInstance';

type Props = {
  palName: PalName;
  gender: Gender;
};

export const BreedingPalChip = ({ palName, gender }: Props) => {
  return (
    <Chip
      label={`${palName} (${gender})`}
      color={getGenderColor(gender)}
      size="small"
    />
  );
};
