import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-teal-400 px-4 py-2">
      <Link to={'/'}>
        <div className="">LOGO</div>
      </Link>
      <div className="">
        <ul className="flex gap-4">
          <NavItem to={'/products'} title={'Products'} />
          <NavItem to={'/cart'} title={'Cart'} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
