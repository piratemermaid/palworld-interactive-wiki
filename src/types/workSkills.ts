export type WorkSkill =
  | 'Kindling'
  | 'Planting'
  | 'Handiwork'
  | 'Lumbering'
  | 'Medicine Production'
  | 'Transporting'
  | 'Watering'
  | 'Generating Electricity'
  | 'Gathering'
  | 'Mining'
  | 'Cooling'
  | 'Farming';

type PalSkill = { name: WorkSkill; level: number; product?: string };

export type PalSkillList = Record<string, PalSkill[]>;
