import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userRole = 'admin'; // replace with dynamic logic later

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? (
            <Dashboard role={userRole} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
};

export default App;
