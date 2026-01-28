import { Chip } from '@mui/material';

type Props = {
  trait: string;
};

export const TraitChip = ({ trait }: Props) => {
  return <Chip label={trait} size="small" />;
};
