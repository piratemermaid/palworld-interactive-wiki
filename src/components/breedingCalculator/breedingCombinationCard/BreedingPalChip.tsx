import { Chip } from '@mui/material';

import { getGenderColor } from '@utils/breeding';

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
