import { useCallback } from 'react';

const useAddToCart = (cartItems, setCartItems) => {
  const addToCart = useCallback(
    (product) => {
      // Check if the product already exists in the cartItems
      const productIndex = cartItems.findIndex((item) => item.id === product.id);
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
    },
    [cartItems, setCartItems],
  );

  return addToCart;
};

export default useAddToCart;
