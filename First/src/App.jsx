import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

const App = () => {
  const userRole = 'admin'; // replace with dynamic logic later

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard role={userRole} />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
};

export default App;
