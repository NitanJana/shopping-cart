import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { product, cartItems, addToCartItems } = location.state;

  return (
    <div key={product.id}>
      <p>{product.title}</p>
      <img src={product.image} alt={product.title} className="max-w-[300px]" />
      <p>{product.price}</p>
      <button
        onClick={() => navigate(-1)}
        className="rounded-lg border-2 border-teal-400 bg-white px-4 py-2 text-teal-400"
      >
        Go back
      </button>
      {/* <button onClick={addToCart} className="rounded-lg border-2 border-teal-400 bg-white px-4 py-2 text-teal-400">
        Add to cart
      </button>
      {cart.length > 0 &&
        cart.map((product) => {
          return (
            <div key={product.id} className="">
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.cartCount}</p>
              <img src={product.image} alt={product.title} className="max-w-[300px]" />
            </div>
          );
        })} */}
    </div>
  );
};

export default ProductDetails;
