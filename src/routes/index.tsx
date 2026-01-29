import { createBrowserRouter } from 'react-router-dom';
import { map } from 'lodash';

import App from '../App';
import { ROUTES } from '@constants/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>oopsie poopsie this page doesn't exist</h1>,
    children: map(ROUTES, (route) => {
      return {
        path: route.url,
        element: <route.Component />,
      };
    }),
  },
]);

export default router;
