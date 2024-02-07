import { useState, useEffect } from 'react';

const useProductData = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        // TODO: Use file storage instead
        // const productwithImages = await Promise.all(
        //   data.map(async (product) => {
        //     const imgRes = await fetch(product.image, { mode: 'cors' });
        //     const imgBlob = await imgRes.blob();
        //     const imgUrl = URL.createObjectURL(imgBlob);
        //     return { ...product, imgUrl };
        //   }),
        // );
        setProducts(data);
        sessionStorage.setItem('productData', JSON.stringify(data));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const productData = sessionStorage.getItem('productData');
    if (productData) {
      setProducts(JSON.parse(productData));
      setLoading(false);
    } else {
      fetchProducts();
    }
  }, []);

  return { products, error, loading };
};

export default useProductData;
