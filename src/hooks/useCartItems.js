import { useState } from 'react';

const useCartItems = () => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return storedCartItems;
  });

  return { cartItems, setCartItems };
};

export default useCartItems;
