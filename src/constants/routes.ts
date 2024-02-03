type Route = { url: string; label: string };

export const ROUTES: Record<string, Route> = {
  home: {
    url: '/',
    label: 'Home',
  },
  workSuitability: {
    url: '/work_suitability',
    label: 'Work Suitability',
  },
};
