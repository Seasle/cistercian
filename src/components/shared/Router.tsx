import { useRoutes } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Example } from '@/pages/Example';
import { NotFound } from '@/pages/NotFound';

export const Router = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/example',
      element: <Example />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
};
