import { WORK_SUITABILITY_TYPES } from '@constants/workSuitability';

declare global {
  type WorkSuitability = (typeof WORK_SUITABILITY_TYPES)[number];

  type PalWorkSuitability = {
    name: WorkSuitability;
    level: number;
    product?: string;
  };

  type PalWorkSuitabilityList = Record<string, PalWorkSuitability[]>;
}

export {};
