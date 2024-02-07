import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContext, useState } from 'react';
import App from './pages/App';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import ErrorPage from './pages/ErrorPage';
import useProductData from './hooks/useProductData';

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

const Router = () => {
  const { products } = useProductData();
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    // Check if the product already exists in the cartItems
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    console.log(product);
    if (productIndex !== -1) {
      // If the product exists, update its cartItemsCount
      setCartItems((prev) => {
        const updatedCart = [...prev];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          cartItemsCount: updatedCart[productIndex].cartItemsCount + 1,
        };
        return updatedCart;
      });
    } else {
      // If the product doesn't exist, add it to the cartItems
      setCartItems((prev) => [
        ...prev,
        { id: product.id, title: product.title, image: product.image, price: product.price, cartItemsCount: 1 },
      ]);
    }
  }

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

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default Router;
