import { useContext } from 'react';
import Navbar from '../components/Navbar';
import ShopContext from '../contexts/shopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, decreaseInCart, removeItem } = useContext(ShopContext);
  return (
    <div className="w-full">
      <Navbar />

      <div className="grid grid-cols-[repeat(_auto-fit,_minmax(350px,_1fr))] gap-10 p-8">
        {cartItems.length > 0 &&
          cartItems.map((cartItem) => {
            return (
              <div key={cartItem.id} className="grid grid-cols-[1fr,3fr] grid-rows-[200px] items-center gap-2">
                <img src={cartItem.image} alt={cartItem.title} className="max-w-[100px]" />
                <div className="grid justify-center gap-4">
                  <p className="w-60">{cartItem.title}</p>
                  <div className="flex gap-2">
                    <p>{cartItem.price}</p> x <p>{cartItem.cartItemsCount}</p>
                    <button className="w-8 bg-teal-300 text-white" onClick={() => addToCart(cartItem)}>
                      +
                    </button>
                    <button className="w-8 bg-teal-300 text-white" onClick={() => decreaseInCart(cartItem)}>
                      -
                    </button>
                    <button className="bg-red-600 text-white" onClick={() => removeItem(cartItem)}>
                      remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Link to={'/checkout'}>
        <div className="flex justify-center">
          <button className="">Checkout</button>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
