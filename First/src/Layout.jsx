import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const Layout = ({ role, children }) => {
  return (
    <>
      <Sidebar />
      <Navbar role={role} />
      <main style={{ marginLeft: '200px', marginTop: '60px', padding: '1rem' }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
