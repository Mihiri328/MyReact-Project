import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = ({ role }) => {
  return (
    <nav className="navbar">
      <h1 className="dashboard-iden"> <b>DASHBOARD </b></h1>
      <div className="items-center">
        {role === 'admin' ? (
          <Link to="/admin" className="foradmin">Admin Panel</Link>
        ) : (
          <Link to="/user" className="foruser">User Panel</Link>
        )}
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Navbar;
