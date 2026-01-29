import { Chip } from '@mui/material';

type Props = {
  trait: string;
  count?: number;
};

export const TraitChip = ({ trait, count }: Props) => {
  let label = trait;

  if (count) {
    label += ` x${count}`;
  }

  return <Chip label={label} size="small" />;
};
