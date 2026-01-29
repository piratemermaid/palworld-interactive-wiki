import { Chip, Tooltip } from '@mui/material';
import {
  KeyboardArrowUp as GoodIcon,
  KeyboardDoubleArrowUp as BestIcon,
  KeyboardArrowDown as BadIcon,
  KeyboardDoubleArrowDown as WorstIcon,
  AutoAwesome as RainbowIcon,
} from '@mui/icons-material';

import { PASSIVE_SKILLS } from '@data/passiveSkills';

type Props = {
  trait: string;
  count?: number;
};

const getTierInfo = (traitName: string) => {
  const skill = PASSIVE_SKILLS.find((s) => s.name === traitName);
  if (!skill) return null;

  return {
    tier: skill.tier,
  };
};

const getTierColor = (tier: number | 'Rainbow' | null) => {
  switch (tier) {
    case -3:
    case -2:
    case -1:
      return 'warning';
    case 1:
    case 2:
    case 3:
    case 'Rainbow':
      return 'success';
    default:
      return 'default';
  }
};

const getTierIcon = (tier: number | 'Rainbow' | null) => {
  if (tier === null) return null;

  switch (tier) {
    case -3:
      return <WorstIcon sx={{ fontSize: 14 }} />;
    case -2:
    case -1:
      return <BadIcon sx={{ fontSize: 14 }} />;
    case 1:
    case 2:
      return <GoodIcon sx={{ fontSize: 14 }} />;
    case 3:
      return <BestIcon sx={{ fontSize: 14 }} />;
    case 'Rainbow':
      return <RainbowIcon sx={{ fontSize: 14 }} />;
    default:
      return null;
  }
};

export const TraitChip = ({ trait, count }: Props) => {
  const tierInfo = getTierInfo(trait);
  const tier = tierInfo?.tier ?? null;

  const skillData = PASSIVE_SKILLS.find((s) => s.name === trait);

  let label = trait;

  if (count) {
    label += ` x${count}`;
  }

  const color = getTierColor(tier);
  const icon = getTierIcon(tier);

  const customSx =
    tier === 'Rainbow'
      ? {
          background: 'linear-gradient(45deg, #66BB6A, #43A047, #2E7D32)',
          color: 'white',
          '& .MuiChip-icon': {
            color: 'white',
          },
        }
      : {};

  return (
    <Tooltip title={skillData?.description ?? null} placement="top">
      <Chip
        label={label}
        size="small"
        color={color as any}
        {...(icon && { icon })}
        sx={customSx}
      />
    </Tooltip>
  );
};
