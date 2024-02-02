export type WorkSuitability =
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

type PalWorkSuitability = {
  name: WorkSuitability;
  level: number;
  product?: string;
};

export type PalWorkSuitabilityList = Record<string, PalWorkSuitability[]>;
