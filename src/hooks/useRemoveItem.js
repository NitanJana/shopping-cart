import { useCallback } from 'react';

const useRemoveItem = (cartItems, setCartItems) => {
  const removeItem = useCallback(
    (product) => {
      const productIndex = cartItems.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        setCartItems((prev) => {
          const updatedCart = [...prev];
          return updatedCart.filter((item) => item.id !== product.id);
        });
      }
    },
    [cartItems, setCartItems],
  );

  return removeItem;
};

export default useRemoveItem;
