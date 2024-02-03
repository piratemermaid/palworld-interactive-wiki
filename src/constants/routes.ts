import { HomePage, WorkSuitabilityPage, PalDataPage } from '../routes/pages';

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
  palData: { url: '/pal_data', label: 'Pal Data', Component: PalDataPage },
};
