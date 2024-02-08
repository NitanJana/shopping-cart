import { useCallback } from 'react';

const useDecreaseInCart = (cartItems, setCartItems) => {
  const decreaseInCart = useCallback(
    (product) => {
      // Check if the product already exists in the cartItems
      const productIndex = cartItems.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        // If the product exists, update its cartItemsCount
        setCartItems((prev) => {
          const updatedCart = [...prev];
          updatedCart[productIndex] = {
            ...updatedCart[productIndex],
            cartItemsCount: updatedCart[productIndex].cartItemsCount - 1,
          };
          return updatedCart.filter((product) => product.cartItemsCount !== 0);
        });
      }
    },
    [cartItems, setCartItems],
  );

  return decreaseInCart;
};

export default useDecreaseInCart;
