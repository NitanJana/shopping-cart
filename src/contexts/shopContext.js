import { createContext } from 'react';

const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  decreaseInCart: () => {},
  removeItem: () => {},
});

export default ShopContext;
