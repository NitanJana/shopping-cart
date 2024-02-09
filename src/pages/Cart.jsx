import { useContext } from 'react';
import Navbar from '../components/Navbar';
import ShopContext from '../contexts/shopContext';
import { Link, useNavigate } from 'react-router-dom';
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';

const Cart = () => {
  const { cartItems, addToCart, decreaseInCart, removeItem } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <Navbar />
      <button
        onClick={() => navigate(-1)}
        className="m-2 flex items-center justify-center border border-black px-4 py-2"
      >
        &lt;-
      </button>
      <div className="grid grid-cols-[repeat(_auto-fit,_minmax(350px,_0.5fr))] justify-center gap-10 p-8">
        {cartItems.length > 0 &&
          cartItems.map((cartItem) => {
            return (
              <div
                key={cartItem.id}
                className="grid grid-cols-[1fr,3fr] grid-rows-[200px] items-center justify-center gap-2"
              >
                <img src={cartItem.image} alt={cartItem.title} className="max-w-[100px]" />
                <div className="flex flex-col justify-center gap-4">
                  <p className="w-60 font-bold">{cartItem.title}</p>
                  <div className="flex gap-2">
                    <p>{cartItem.price}</p> x <p>{cartItem.cartItemsCount}</p>
                    <div className="flex w-40 flex-col items-center gap-4">
                      <div className="flex gap-5">
                        <UpdateButton type={'increase'} handleClick={() => addToCart(cartItem)} />
                        <p>{cartItem?.cartItemsCount}</p>
                        <UpdateButton type={'decrease'} handleClick={() => decreaseInCart(cartItem)} />
                      </div>
                      <DeleteButton handleClick={() => removeItem(cartItem)} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Link to={'/checkout'}>
        <div className="flex justify-center">
          <button className=" border border-black px-4 py-2">Checkout</button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
