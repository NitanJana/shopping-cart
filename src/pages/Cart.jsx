import { useContext } from 'react';
import Navbar from '../components/Navbar';
import ShopContext from '../contexts/shopContext';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div>
      <Navbar />
      {cartItems.length > 0 &&
        cartItems.map((cartItem) => {
          return (
            <div key={cartItem.id} className="">
              <p>{cartItem.title}</p>
              <p>{cartItem.price}</p>
              <p>{cartItem.cartItemsCount}</p>
              <img src={cartItem.image} alt={cartItem.title} className="max-w-[300px]" />
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
