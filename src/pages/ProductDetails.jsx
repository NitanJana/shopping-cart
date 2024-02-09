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
  const navigate = useNavigate();
  const productArray = products.filter((item) => item.id == id);
  const product = productArray[0];
  const cartItem = cartItems.filter((item) => item.id === product?.id)[0];
  

  const [cartToast, setCartToast] = useState(false);
  useEffect(() => {
    if (cartToast) {
      const timeoutId = setTimeout(() => {
        setCartToast(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [cartToast]);

  return (
    <>
      <Navbar />
      {product && (
        <div>
          <button
            onClick={() => navigate(-1)}
            className="m-2 flex items-center justify-center border border-black px-4 py-2"
          >
            &lt;-
          </button>

          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              <img src={product.image} alt={product.title} className="max-w-[300px]" />
            </div>

            <div className="flex w-96 flex-col justify-between gap-4 p-8">
              <p className="text-xl font-bold">{product.title}</p>
              <p>{product.description}</p>
              <p className="text-lg font-semibold">${product.price}</p>
              {cartItem?.cartItemsCount > 0 ? (
                <div className="flex w-40 flex-col items-center gap-4">
                  <div className="flex gap-5">
                    <UpdateButton type={'increase'} handleClick={() => addToCart(cartItem)} />
                    <p>{cartItem?.cartItemsCount}</p>
                    <UpdateButton type={'decrease'} handleClick={() => decreaseInCart(cartItem)} />
                  </div>
                  <DeleteButton handleClick={() => removeItem(cartItem)} />
                </div>
              ) : (
                <AddToCartBtn
                  addToCart={addToCart}
                  product={product}
                  handleClick={() => {
                    addToCart(product);
                    setCartToast(true);
                  }}
                />
              )}
            </div>
          </div>

          <p
            className={`flex m-4 text-lg items-center justify-center transition-opacity duration-1000 ease-in-out ${cartToast ? 'opacity-100' : 'opacity-0'}`}
          >
            Added to cart
          </p>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
