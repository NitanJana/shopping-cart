import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShopContext from '../contexts/shopContext';
import Navbar from '../components/Navbar';
import AddToCartBtn from '../components/AddToCartBtn';
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';

const ProductDetails = () => {
  const { products, cartItems, addToCart, decreaseInCart, removeItem } = useContext(ShopContext);
  const { id } = useParams();
  const [showDiv, setShowDiv] = useState(false);
  const navigate = useNavigate();
  const productArray = products.filter((item) => item.id == id);
  const product = productArray[0];
  const cartItem = cartItems.filter((item) => item.id === product?.id)[0];

  useEffect(() => {
    if (showDiv) {
      const timeoutId = setTimeout(() => {
        setShowDiv(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [showDiv]);

  return (
    <>
      <Navbar />
      {product && (
        <div>
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg border-2 border-teal-400 bg-white px-4 py-2 text-teal-400"
          >
            Go back
          </button>
          <p>{product.title}</p>
          <img src={product.image} alt={product.title} className="max-w-[300px]" />
          <p>{product.price}</p>
          {cartItem?.cartItemsCount > 0 ? (
            <div className="flex gap-2">
              <UpdateButton type={'increase'} handleClick={() => addToCart(cartItem)} />
              <p>{cartItem?.cartItemsCount}</p>
              <UpdateButton type={'decrease'} handleClick={() => decreaseInCart(cartItem)} />
              <DeleteButton handleClick={() => removeItem(cartItem)} />
            </div>
          ) : (
            <AddToCartBtn
              addToCart={addToCart}
              product={product}
              setShowDiv={setShowDiv}
              handleClick={() => {
                addToCart(product);
                setShowDiv(true);
              }}
            />
          )}
          <p className={`transition-opacity duration-1000 ease-in-out ${showDiv ? 'opacity-100' : 'opacity-0'}`}>
            Added to cart
          </p>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
