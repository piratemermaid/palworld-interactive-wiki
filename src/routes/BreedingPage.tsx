import React from 'react';
import {
  Stack,
  Typography,
  Autocomplete,
  TextField,
  Tabs,
  Tab,
} from '@mui/material';

import { BreedingCombinationCard } from '../components/breedingCalculator/breedingCombinationCard/BreedingCombinationCard';
import { BreedingPalInstanceManager } from '../components/breedingCalculator/BreedingPalInstanceManager';
import { BreedingAlerts } from '../components/breedingCalculator/BreedingAlerts';
import { TraitAutocomplete } from '../components/breedingCalculator/TraitAutocomplete';
import { useStore } from '../store';
import { PAL_NAME_LIST } from '../data/pals';
import { BREEDING_DATA } from '../data/breeding';
import {
  getAvailableCombinations,
  getViableCombinations,
  getInstancesForPal,
} from '../utils/breeding';
import type { PalInstance } from '../types/palInstance';
import type { ViableCombination } from '../utils/breeding';

export default function BreedingPage() {
  const [activeTab, setActiveTab] = React.useState(0);

  const palInstances = useStore((store) => store.palInstances);
  const selectedPal = useStore((store) => store.selectedBreedingPal);
  const setSelectedPal = useStore((store) => store.setSelectedBreedingPal);
  const traitFilter = useStore((store) => store.breedingTraitFilter);
  const setTraitFilter = useStore((store) => store.setBreedingTraitFilter);

  const availableCombinations = React.useMemo(() => {
    if (!selectedPal) return [];
    return getAvailableCombinations(selectedPal, palInstances, BREEDING_DATA);
  }, [selectedPal, palInstances]);

  const viableCombinations = React.useMemo(() => {
    return getViableCombinations(availableCombinations, palInstances);
  }, [availableCombinations, palInstances]);

  // Filter out combinations that don't match the trait filter
  const filteredCombinations = React.useMemo(() => {
    if (traitFilter.length === 0) return viableCombinations;

    /**
     * Check if an instance has at least one of the required traits
     */
    const hasAtLeastOneTrait = (
      instance: PalInstance,
      requiredTraits: string[],
    ): boolean => {
      if (requiredTraits.length === 0) return true;
      return requiredTraits.some((trait) => instance.traits.includes(trait));
    };

    /**
     * Check if a combination has any matches when a trait filter is active
     */
    const hasMatches = (
      combination: ViableCombination,
      filter: string[],
    ): boolean => {
      if (filter.length === 0) return true;

      const parent1Instances = getInstancesForPal(
        combination.combination.parent1,
        palInstances,
      );
      const parent2Instances = getInstancesForPal(
        combination.combination.parent2,
        palInstances,
      );

      // Check if any parent instances match
      const hasParent1Match = parent1Instances.some((instance) =>
        hasAtLeastOneTrait(instance, filter),
      );
      const hasParent2Match = parent2Instances.some((instance) =>
        hasAtLeastOneTrait(instance, filter),
      );

      // Check if any viable pairs match
      const hasViablePairMatch = combination.viablePairs.some(
        (pair) =>
          hasAtLeastOneTrait(pair.instance1, filter) ||
          hasAtLeastOneTrait(pair.instance2, filter),
      );

      return hasParent1Match || hasParent2Match || hasViablePairMatch;
    };

    return viableCombinations.filter((combination) =>
      hasMatches(combination, traitFilter),
    );
  }, [viableCombinations, traitFilter, palInstances]);

  const hasBreedingData = selectedPal
    ? (BREEDING_DATA[selectedPal]?.length ?? 0) > 0
    : false;
  const hasAvailableCombinations = availableCombinations.length > 0;
  const viableCount = React.useMemo(
    () => viableCombinations.filter((vc) => vc.hasViablePair).length,
    [viableCombinations],
  );
  const hasViableCombinations = viableCount > 0;

  const options = PAL_NAME_LIST.sort();

  return (
    <Stack spacing={3}>
      <Typography variant="h2">Breeding Calculator</Typography>

      <Autocomplete
        options={options}
        value={selectedPal}
        onChange={(_, newValue) => setSelectedPal(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Select Pal to Breed (optional)" />
        )}
        sx={{ maxWidth: 400 }}
      />

      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
      >
        <Tab label="Manage Instances" />
        <Tab label="Breeding Calculator" />
      </Tabs>

      {activeTab === 0 && (
        <BreedingPalInstanceManager targetPal={selectedPal} />
      )}

      {activeTab === 1 && (
        <Stack spacing={2}>
          <BreedingAlerts
            selectedPal={selectedPal}
            hasBreedingData={hasBreedingData}
            hasAvailableCombinations={hasAvailableCombinations}
            hasViableCombinations={hasViableCombinations}
            viableCount={viableCount}
          />

          {selectedPal && hasAvailableCombinations && (
            <>
              <TraitAutocomplete
                selectedTraits={traitFilter}
                onChange={setTraitFilter}
                label="Filter by traits (optional)"
              />

              <Stack spacing={2}>
                {filteredCombinations.length > 0 ? (
                  filteredCombinations.map((viableCombination, index) => (
                    <BreedingCombinationCard
                      key={index}
                      viableCombination={viableCombination}
                      allInstances={palInstances}
                      traitFilter={traitFilter}
                    />
                  ))
                ) : (
                  <Typography variant="body1" color="text.secondary">
                    No breeding combinations match the selected traits.
                  </Typography>
                )}
              </Stack>
            </>
          )}

          {!selectedPal && (
            <Typography variant="body1" color="text.secondary">
              Select a pal above to see available breeding combinations based on
              your caught pals and their genders.
            </Typography>
          )}
        </Stack>
      )}
    </Stack>
  );
}
