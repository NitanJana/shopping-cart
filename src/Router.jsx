import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import ErrorPage from './pages/ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/checkout',
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
