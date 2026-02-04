import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  userPals: PalName[];
  updateUserPals: (palName: PalName) => void;
  setUserPals: (palNames: PalName[]) => void;

  userPalsCaughtTen: PalName[];
  updateUserPalsCaughtTen: (palName: PalName) => void;
  setUserPalsCaughtTen: (palNames: PalName[]) => void;

  palInstances: PalInstance[];
  addPalInstance: (instance: Omit<PalInstance, 'id'>) => void;
  removePalInstance: (id: string) => void;
  updatePalInstance: (id: string, updates: Partial<PalInstance>) => void;
  getInstancesByPalName: (palName: PalName) => PalInstance[];

  selectedBreedingPal: PalName | null;
  setSelectedBreedingPal: (pal: PalName | null) => void;

  breedingTraitFilter: string[];
  setBreedingTraitFilter: (traits: string[]) => void;

  myPalsCaughtFilter: 'caught' | 'uncaught' | null;
  setMyPalsCaughtFilter: (filter: 'caught' | 'uncaught' | null) => void;
  myPalsCaughtTenFilter: 'caught' | 'uncaught' | null;
  setMyPalsCaughtTenFilter: (filter: 'caught' | 'uncaught' | null) => void;
  myPalsSortBy: 'paldeckNo' | 'name';
  setMyPalsSortBy: (sortBy: 'paldeckNo' | 'name') => void;
  showUncaughtPalNames: boolean;
  setShowUncaughtPalNames: (show: boolean) => void;

  breedingPlans: Record<PalName, ViablePair[]>;
  addBreedingPlanPair: (targetPal: PalName, pair: ViablePair) => void;
  removeBreedingPlanPair: (targetPal: PalName, pairId: string) => void;
  getBreedingPlan: (targetPal: PalName) => ViablePair[];
  clearBreedingPlan: (targetPal: PalName) => void;
};

export const useStore = create<State, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      darkMode: false,
      toggleDarkMode: () => {
        const darkMode = get().darkMode;
        return set({ darkMode: !darkMode });
      },

      userPals: [],
      updateUserPals: (palName) => {
        const userPals = get().userPals;

        const newUserPals = userPals.includes(palName)
          ? userPals.filter((pal) => pal !== palName)
          : [...userPals, palName];

        return set({ userPals: newUserPals });
      },
      setUserPals: (palNames) => set({ userPals: palNames }),

      userPalsCaughtTen: [],
      updateUserPalsCaughtTen: (palName) => {
        const userPalsCaughtTen = get().userPalsCaughtTen;

        const newUserPalsCaughtTen = userPalsCaughtTen.includes(palName)
          ? userPalsCaughtTen.filter((pal) => pal !== palName)
          : [...userPalsCaughtTen, palName];

        return set({
          userPalsCaughtTen: newUserPalsCaughtTen,
        });
      },
      setUserPalsCaughtTen: (palNames) => set({ userPalsCaughtTen: palNames }),

      palInstances: [],
      addPalInstance: (instance) => {
        const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const newInstance: PalInstance = { ...instance, id };
        set((state) => ({
          palInstances: [...state.palInstances, newInstance],
        }));
      },
      removePalInstance: (id) => {
        set((state) => ({
          palInstances: state.palInstances.filter(
            (instance) => instance.id !== id,
          ),
        }));
      },
      updatePalInstance: (id, updates) => {
        set((state) => ({
          palInstances: state.palInstances.map((instance) =>
            instance.id === id ? { ...instance, ...updates } : instance,
          ),
        }));
      },
      getInstancesByPalName: (palName) => {
        return get().palInstances.filter(
          (instance) => instance.palName === palName,
        );
      },

      selectedBreedingPal: null,
      setSelectedBreedingPal: (pal) => set({ selectedBreedingPal: pal }),

      breedingTraitFilter: [],
      setBreedingTraitFilter: (traits) => set({ breedingTraitFilter: traits }),

      myPalsCaughtFilter: null,
      setMyPalsCaughtFilter: (filter) => set({ myPalsCaughtFilter: filter }),
      myPalsCaughtTenFilter: null,
      setMyPalsCaughtTenFilter: (filter) =>
        set({ myPalsCaughtTenFilter: filter }),
      myPalsSortBy: 'paldeckNo',
      setMyPalsSortBy: (sortBy) => set({ myPalsSortBy: sortBy }),
      showUncaughtPalNames: false,
      setShowUncaughtPalNames: (show) => set({ showUncaughtPalNames: show }),

      breedingPlans: {},
      addBreedingPlanPair: (targetPal, pair) => {
        const plans = get().breedingPlans;
        const existingPairs = plans[targetPal] || [];
        // Check if pair already exists (by comparing instance IDs)
        const pairExists = existingPairs.some(
          (p) =>
            p.instance1.id === pair.instance1.id &&
            p.instance2.id === pair.instance2.id,
        );
        if (!pairExists) {
          set({
            breedingPlans: {
              ...plans,
              [targetPal]: [...existingPairs, pair],
            },
          });
        }
      },
      removeBreedingPlanPair: (targetPal, pairId) => {
        const plans = get().breedingPlans;
        const existingPairs = plans[targetPal] || [];
        set({
          breedingPlans: {
            ...plans,
            [targetPal]: existingPairs.filter(
              (p) => p.instance1.id + p.instance2.id !== pairId,
            ),
          },
        });
      },
      getBreedingPlan: (targetPal) => {
        return get().breedingPlans[targetPal] || [];
      },
      clearBreedingPlan: (targetPal) => {
        const plans = get().breedingPlans;
        const { [targetPal]: _, ...rest } = plans;
        set({ breedingPlans: rest });
      },
    }),
    {
      name: 'store',
    },
  ),
);
