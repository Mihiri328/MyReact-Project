import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">DASHBOARD</h2>
      <nav className="sidebar-nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact Us</Link>
        <Link to="/settings" className="nav-item">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
