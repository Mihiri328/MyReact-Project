import React from 'react';
import {
  AccountCircle,
  Notifications,
  Visibility,
  Lock,
  HeadsetMic,
  Info
} from '@mui/icons-material';

const settingsItems = [
  { title: 'Account', icon: <AccountCircle /> },
  { title: 'Notifications', icon: <Notifications /> },
  { title: 'Appearance', icon: <Visibility /> },
  { title: 'Privacy & Security', icon: <Lock /> },
  { title: 'Help and Support', icon: <HeadsetMic /> },
  { title: 'About', icon: <Info /> },
];

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      <div className="settings-list">
        {settingsItems.map((item) => (
          <div key={item.title} className="settings-item">
            <div className="settings-icon">
              {item.icon}
              <span>{item.title}</span>
            </div>
            <span className="settings-arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
