import { PASSIVE_SKILL_TYPES } from '@data';

declare global {
  type PassiveSkillType = (typeof PASSIVE_SKILL_TYPES)[number];

  type PassiveSkillCategory = 'Base' | 'Mount' | 'Hunger' | null;

  type PassiveSkill = {
    name: string;
    types: PassiveSkillType[];
    description: string;
    tier: 1 | 2 | 3 | -1 | -2 | -3 | 'Rainbow';
    category?: PassiveSkillCategory;
  };
}

export {};
