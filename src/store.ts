import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PalName } from './types/pal';

type State = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  userPals: PalName[];
  updateUserPals: (palName: PalName) => void;
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

        console.log('>>', newUserPals);

        return set({ userPals: newUserPals });
      },
    }),
    {
      name: 'store',
    },
  ),
);
