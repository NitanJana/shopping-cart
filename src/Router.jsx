import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import ErrorPage from './pages/ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/product/:id',
      element: <ProductDetails />,
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
