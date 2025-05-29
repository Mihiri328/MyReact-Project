import Navbar from './components/Navbar';

const Dashboard = ({ role }) => {
  return (
    <div className="dashboard">
      <Navbar role={role} />
      <main className="dashboard-main">
        <h2 className="dashboard-title">Welcome to the Dashboard</h2>
        <p className="dashboard-text">This is the {role} view. Use the top menu to navigate.</p>
      </main>
    </div>
  );
};

export default Dashboard;
