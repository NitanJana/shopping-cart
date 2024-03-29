import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { useContext } from 'react';
import ShopContext from '../contexts/shopContext';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const productCount = cartItems.reduce((acc, curr) => acc + curr.cartItemsCount, 0);
  return (
    <nav className="flex w-full items-center justify-between bg-teal-400 px-4 py-2">
      <Link to={'/'}>
        <div className="">LOGO</div>
      </Link>
      <div className="">
        <ul className="flex gap-4">
          <NavItem to={'/checkout'} title={'Checkout'} />
          <div className="flex items-center justify-center">
            <NavItem to={'/cart'} title={'Cart'} />
            <span className="flex h-8 w-8 border-black items-center justify-center border ">{productCount}</span>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
