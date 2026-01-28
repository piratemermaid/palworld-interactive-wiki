import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { PalName } from './types/pal';
import type { PalInstance } from './types/palInstance';

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
    }),
    {
      name: 'store',
    },
  ),
);
