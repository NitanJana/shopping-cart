import { useState, useEffect } from 'react';

const useProductData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
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
    };

    const productData = sessionStorage.getItem('productData');
    if (productData) {
      setProducts(JSON.parse(productData));
    } else {
      fetchProducts();
    }
  }, []);

  return { products };
};

export default useProductData;
