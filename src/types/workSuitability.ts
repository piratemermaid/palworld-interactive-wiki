import { WORK_SUITABILITY_TYPES } from '../constants/workSuitability';

export type WorkSuitability = (typeof WORK_SUITABILITY_TYPES)[number];

export type PalWorkSuitability = {
  name: WorkSuitability;
  level: number;
  product?: string;
};

export type PalWorkSuitabilityList = Record<string, PalWorkSuitability[]>;
