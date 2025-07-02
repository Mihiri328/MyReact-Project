import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

const Dashboard = ({ role }) => {
  const [weather, setWeather] = useState([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  
  const [backendMessage, setBackendMessage] = useState('');
  const [loadingMessage, setLoadingMessage] = useState(true);


  useEffect(() => {
    fetch('http://localhost:5000/weatherforecast')
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoadingWeather(false);
      })
      .catch((err) => {
        console.error('Error fetching weather data:', err);
        setLoadingWeather(false);
      });
  }, []);


  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.text())
      .then(data => {
        setBackendMessage(data);
        setLoadingMessage(false);
      })
      .catch(err => {
        console.error('Error fetching backend message:', err);
        setLoadingMessage(false);
      });
  }, []);

  return (
    <div className="dashboard">
      <Navbar role={role} />
      <main className="dashboard-main">
        <h2 className="dashboard-title">Welcome to the Dashboard</h2>
        <p className="dashboard-text">This is the {role} view. Use the top menu to navigate.</p>


        <section className="dashboard-backend-message">
          <h3>Backend Message</h3>
          {loadingMessage ? (
            <p>Loading backend message...</p>
          ) : (
            <p>{backendMessage}</p>
          )}
        </section>

        <section className="dashboard-weather">
          <h3>Weather Forecast</h3>
          {loadingWeather ? (
            <p>Loading weather data...</p>
          ) : weather.length === 0 ? (
            <p>No weather data available.</p>
          ) : (
            <ul>
              {weather.map((item, idx) => (
                <li key={idx}>
                  {item.date} - {item.temperatureC}°C - {item.summary}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
