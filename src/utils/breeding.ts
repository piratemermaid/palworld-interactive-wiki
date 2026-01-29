/**
 * Get all instances for a specific pal name
 */
export function getInstancesForPal(
  palName: PalName,
  instances: PalInstance[],
): PalInstance[] {
  return instances.filter((instance) => instance.palName === palName);
}

/**
 * Get MUI color for gender chip
 */
export function getGenderColor(gender: Gender): 'primary' | 'secondary' {
  return gender === 'M' ? 'primary' : 'secondary';
}

/**
 * Check if two instances have compatible genders (one M, one F)
 */
export function isGenderCompatible(
  instance1: PalInstance,
  instance2: PalInstance,
): boolean {
  return instance1.gender !== instance2.gender;
}

/**
 * Get all breeding combinations for a target pal that have both parents available
 */
export function getAvailableCombinations(
  targetPal: PalName,
  instances: PalInstance[],
  breedingData: BreedingData,
): BreedingCombination[] {
  const combinations = breedingData[targetPal] || [];
  const instancePalNames = new Set(instances.map((inst) => inst.palName));

  return combinations.filter(
    (combo) =>
      instancePalNames.has(combo.parent1) &&
      instancePalNames.has(combo.parent2),
  );
}

export function getViableCombinations(
  combinations: BreedingCombination[],
  instances: PalInstance[],
): ViableCombination[] {
  return combinations.map((combination) => {
    const parent1Instances = getInstancesForPal(combination.parent1, instances);
    const parent2Instances = getInstancesForPal(combination.parent2, instances);

    const viablePairs: Array<{
      instance1: PalInstance;
      instance2: PalInstance;
    }> = [];

    // Find all compatible gender pairs
    for (const inst1 of parent1Instances) {
      for (const inst2 of parent2Instances) {
        if (isGenderCompatible(inst1, inst2)) {
          viablePairs.push({ instance1: inst1, instance2: inst2 });
        }
      }
    }

    return {
      combination,
      viablePairs,
      hasViablePair: viablePairs.length > 0,
    };
  });
}
