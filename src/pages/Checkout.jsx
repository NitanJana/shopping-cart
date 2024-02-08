import { useContext } from 'react';
import Navbar from '../components/Navbar';
import ShopContext from '../contexts/shopContext';

const Checkout = () => {
  const { cartItems, addToCart, decreaseInCart, removeItem } = useContext(ShopContext);
  const totalAmount = cartItems.reduce((acc, curr) => acc + curr.cartItemsCount * curr.price, 0);
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col ">
        <div className="grid grid-cols-[repeat(_auto-fit,_minmax(550px,_1fr))]">
          {cartItems.length > 0 &&
            cartItems.map((cartItem) => {
              return (
                <div key={cartItem.id} className="grid grid-cols-[200px,300px] grid-rows-[200px] items-center">
                  <img src={cartItem.image} alt={cartItem.title} className="max-w-[100px]" />
                  <div className="flex flex-col gap-4">
                    <p>{cartItem.title}</p>
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
        Total: ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
};

export default Checkout;
