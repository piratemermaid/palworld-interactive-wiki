import { PASSIVE_SKILL_TYPES } from '../data/passiveSkills';

type PassiveSkillType = (typeof PASSIVE_SKILL_TYPES)[number];

export type PassiveSkill = {
  name: string;
  types: PassiveSkillType[];
  description: string;
  tier: 1 | 2 | 3 | -1 | -2 | -3;
};
