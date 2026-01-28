import MyPalsPage from '../routes/MyPalsPage';
import {
  HomePage,
  WorkSuitabilityPage,
  PalDataPage,
  PassiveSkillsPage,
  MyDataPage,
  BreedingPage,
} from '../routes/pages';

type Route = { url: string; label: string; Component: () => JSX.Element };

export const ROUTES: Record<string, Route> = {
  home: {
    url: '/',
    label: 'Home',
    Component: HomePage,
  },
  breeding: {
    url: '/breeding',
    label: 'Breeding',
    Component: BreedingPage,
  },
  workSuitability: {
    url: '/work_suitability',
    label: 'Work Suitability',
    Component: WorkSuitabilityPage,
  },
  myPals: {
    url: '/my_pals',
    label: 'My Pals',
    Component: MyPalsPage,
  },
  palData: { url: '/pal_data', label: 'Pal Data', Component: PalDataPage },
  skills: {
    url: '/passive_skills',
    label: 'Passive Skills',
    Component: PassiveSkillsPage,
  },
  myData: {
    url: '/my_data',
    label: 'My Data',
    Component: MyDataPage,
  },
};
