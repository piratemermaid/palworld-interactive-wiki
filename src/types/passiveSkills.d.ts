import { PASSIVE_SKILL_TYPES } from '@data';

type PassiveSkillType = (typeof PASSIVE_SKILL_TYPES)[number];

declare global {
  type PassiveSkill = {
    name: string;
    types: PassiveSkillType[];
    description: string;
    tier: 1 | 2 | 3 | -1 | -2 | -3;
  };
}

export {};
