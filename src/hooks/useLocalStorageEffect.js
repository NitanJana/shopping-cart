import { useEffect } from 'react';

const useLocalStorageEffect = (cartItems) => {
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
};

export default useLocalStorageEffect;
