import { useState } from 'react';

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="focus:outline-none">
        <img src="/assets/Profile.png" alt="Profile Icon" className="profile-image" />
      </button>
      {open && (
        <ul className="list-ul">
          <li className="list-profile">My Profile</li>
          <li className="list-logout">Logout</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
