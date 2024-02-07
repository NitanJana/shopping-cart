import { useState } from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import useProductData from '../hooks/useProductData';
import '../styles/App.css';

function App() {
  const { products, error, loading } = useProductData();
  const [cartItems, setCartItems] = useState([]);

  const addToCartItems = (product) => {
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
  };

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Products products={products} cartItems={cartItems} addToCartItems={addToCartItems} />
    </div>
  );
}

export default App;
