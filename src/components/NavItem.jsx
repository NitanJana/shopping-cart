import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ to, title }) => {
  return (
    <Link to={to}>
      <li className="p-2">{title}</li>
    </Link>
  );
};

export default NavItem;

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
