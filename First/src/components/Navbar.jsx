import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = ({ role }) => {
  return (
    <div className="top-navbar">
      <div className="role-link">
        {role === 'admin' ? (
          <Link to="/admin" className="nav-link">Admin Panel</Link>
        ) : (
          <Link to="/user" className="nav-link">User Panel</Link>
        )}
      </div>
      <DropdownMenu />
    </div>
  );
};

export default Navbar;
