const DropdownMenu = () => {
  return (
    // apply Unicode emoji for User icon
    <div className="dropdown">
     <button className="dropdown-btn">👤</button> 
      <div className="dropdown-content">
        <a href="/profile">My Profile</a>
        <a href="/logout">Logout</a>
      </div>
    </div>
  );
};

export default DropdownMenu; 
