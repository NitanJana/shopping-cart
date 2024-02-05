import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import '../styles/App.css';

function App() {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productData = sessionStorage.getItem('productData');
    if (productData) {
      setProducts(JSON.parse(productData));
    } else {
      fetchProducts();
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      sessionStorage.setItem('productData', JSON.stringify(data));
    } catch (err) {
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <Products products={products}/>
    </div>
  );
}

export default App;
