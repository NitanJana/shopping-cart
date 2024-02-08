import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useProductData from './hooks/useProductData';
import useCartItems from './hooks/useCartItems';
import useAddToCart from './hooks/useAddToCart';
import useLocalStorageEffect from './hooks/useLocalStorageEffect';
import routes from './routerConfig';
import ShopContext from './contexts/shopContext';
import useDecreaseInCart from './hooks/useDecreaseInCart';
import useRemoveItem from './hooks/useRemoveItem';

const Router = () => {
  const { products } = useProductData();
  const { cartItems, setCartItems } = useCartItems();
  const addToCart = useAddToCart(cartItems, setCartItems);
  const decreaseInCart = useDecreaseInCart(cartItems, setCartItems);
  const removeItem = useRemoveItem(cartItems, setCartItems);

  useLocalStorageEffect(cartItems);

  const router = createBrowserRouter(routes);

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart, decreaseInCart, removeItem }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default Router;
