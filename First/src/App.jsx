import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Settings from './pages/Settings';
import Layout from './Layout';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userRole = 'admin'; // Replace with dynamic role check later

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/about" element={<About />} /> 


      {/* Protected Routes with Layout */}
      {isLoggedIn ? (
        <>
          <Route
            path="/dashboard"
            element={
              <Layout role={userRole}>
                <Dashboard role={userRole} />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout role={userRole}>
                <AdminPage />
              </Layout>
            }
          />
          <Route
            path="/user"
            element={
              <Layout role={userRole}>
                <UserPage />
              </Layout>
            }
          />

          {/* ✅ Contact page inside layout too (optional duplicate) */}
          <Route
            path="/dashboard/contact"
            element={
              <Layout role={userRole}>
                <ContactUs />
              </Layout>
            }
          />

            <Route
               path="/settings"
               element={
            <Layout role={userRole}>
            <Settings />
            </Layout>
  }
/>

        </>
      ) : (
        <>
          <Route path="/dashboard" element={<Navigate to="/login" />} />
          <Route path="/admin" element={<Navigate to="/login" />} />
          <Route path="/user" element={<Navigate to="/login" />} />
           <Route path="/dashboard/contact" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};

export default App;
