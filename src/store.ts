import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PalName } from './types/pal';

type State = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  userPals: PalName[];
  updateUserPals: (palName: PalName) => void;
  userPalsCaughtTen: PalName[];
  updateUserPalsCaughtTen: (palName: PalName) => void;
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
    }),
    {
      name: 'store',
    },
  ),
);
