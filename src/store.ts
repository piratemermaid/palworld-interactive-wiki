import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PalName } from './types/pal';

type State = {
  darkMode: boolean;
  toggleDarkMode: () => void;

  userPals: PalName[];
  addUserPal: (palName: PalName) => void;
  removeUserPal: (palName: PalName) => void;
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
      addUserPal: (palName) => {
        // const darkMode = get().darkMode;
        // return set({ darkMode: !darkMode });
      },
      removeUserPal: (palName) => {
        // const darkMode = get().darkMode;
        // return set({ darkMode: !darkMode });
      },
    }),
    {
      name: 'store',
    },
  ),
);
