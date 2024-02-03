import { HomePage, WorkSuitabilityPage, PalListPage } from '../routes/pages';

type Route = { url: string; label: string; Component: () => JSX.Element };

export const ROUTES: Record<string, Route> = {
  home: {
    url: '/',
    label: 'Home',
    Component: HomePage,
  },
  workSuitability: {
    url: '/work_suitability',
    label: 'Work Suitability',
    Component: WorkSuitabilityPage,
  },
  palList: { url: '/pal_list', label: 'Pal List', Component: PalListPage },
};
