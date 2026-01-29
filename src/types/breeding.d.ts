declare global {
  type Gender = 'M' | 'F';

  type PalInstance = {
    id: string;
    palName: PalName;
    gender: Gender;
    traits: string[]; // passive skill names
  };

  interface ViablePair {
    instance1: PalInstance;
    instance2: PalInstance;
  }

  interface BreedingCombination {
    parent1: PalName;
    parent2: PalName;
  }

  interface ViableCombination {
    combination: BreedingCombination;
    viablePairs: ViablePair[];
    hasViablePair: boolean;
  }

  interface BreedingData {
    [key: PalName]: BreedingCombination[];
  }
}

export {};
