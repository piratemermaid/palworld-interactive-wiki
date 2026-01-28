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
import { useStore } from '../store';
import { PAL_NAME_LIST } from '../data/pals';
import { BREEDING_DATA } from '../data/breeding';
import {
  getAvailableCombinations,
  getViableCombinations,
} from '../utils/breeding';
import type { PalName } from '../types/pal';

export default function BreedingPage() {
  const [selectedPal, setSelectedPal] = React.useState<PalName | null>(null);
  const [activeTab, setActiveTab] = React.useState(0);

  const palInstances = useStore((store) => store.palInstances);

  const availableCombinations = React.useMemo(() => {
    if (!selectedPal) return [];
    return getAvailableCombinations(selectedPal, palInstances, BREEDING_DATA);
  }, [selectedPal, palInstances]);

  const viableCombinations = React.useMemo(() => {
    return getViableCombinations(availableCombinations, palInstances);
  }, [availableCombinations, palInstances]);

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
            <Stack spacing={2}>
              {viableCombinations.map((viableCombination, index) => (
                <BreedingCombinationCard
                  key={index}
                  viableCombination={viableCombination}
                  allInstances={palInstances}
                />
              ))}
            </Stack>
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
