import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const useStore = create<State, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      darkMode: false,
      toggleDarkMode: () => {
        const darkMode = get().darkMode;
        return set({ darkMode: !darkMode });
      },
    }),
    {
      name: 'store',
    },
  ),
);
