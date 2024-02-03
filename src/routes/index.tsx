import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { HomePage, WorkSuitabilityPage } from './pages';
import { ROUTES } from '../constants/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>oopsie poopsie this page doesn't exist</h1>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: ROUTES.workSuitability.url,
        element: <WorkSuitabilityPage />,
      },
    ],
  },
]);

export default router;
