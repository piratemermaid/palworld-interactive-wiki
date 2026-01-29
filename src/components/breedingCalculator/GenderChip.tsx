import { Chip } from '@mui/material';

import { getGenderColor } from '@utils/breeding';

type Props = {
  gender: Gender;
};

export const GenderChip = ({ gender }: Props) => {
  return <Chip label={gender} color={getGenderColor(gender)} size="small" />;
};
