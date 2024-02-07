import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShopContext from '../contexts/shopContext';
import Navbar from '../components/Navbar';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const productArray = products.filter((item) => item.id == id);
  const product = productArray[0];

  return (
    <>
      <Navbar />
      {product && (
        <div>
          <p>{product.title}</p>
          <img src={product.image} alt={product.title} className="max-w-[300px]" />
          <p>{product.price}</p>
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg border-2 border-teal-400 bg-white px-4 py-2 text-teal-400"
          >
            Go back
          </button>
          <button
            onClick={() => addToCart(product)}
            className="rounded-lg border-2 border-teal-400 bg-white px-4 py-2 text-teal-400"
          >
            Add to cart
          </button>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
