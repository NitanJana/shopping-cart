import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useProductData from './hooks/useProductData';
import useCartItems from './hooks/useCartItems';
import useAddToCart from './hooks/useAddToCart';
import useLocalStorageEffect from './hooks/useLocalStorageEffect';
import routes from './routerConfig';
import ShopContext from './contexts/shopContext';

const Router = () => {
  const { products } = useProductData();
  const { cartItems, setCartItems } = useCartItems();
  const addToCart = useAddToCart(cartItems, setCartItems);

  useLocalStorageEffect(cartItems);

  const router = createBrowserRouter(routes);

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default Router;
