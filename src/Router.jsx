import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import ErrorPage from './pages/ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/products',
      element: <App />,
    },
    {
      path: '/cart',
      element: <App />,
    },
    {
      path: '/checkout',
      element: <App />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
