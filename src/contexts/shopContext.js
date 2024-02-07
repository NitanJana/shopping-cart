import { createContext } from 'react';

const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

export default ShopContext;
