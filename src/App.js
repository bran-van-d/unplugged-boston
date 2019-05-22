import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App flex-column">
      <div className="logo-header">
        <img src="unplugged-icon.jpg" width="200" height="200" alt="gaming-icon" />
      </div>

      <div className="body-section flex-row">
        <div className="about-us">
          <span className="center-text"> ABOUT US </span>
        </div>

        <div className="event-wrapper">
          <div className="towns-and-shops">
            <span className="center-text"> TOWNS AND SHOPS </span>
          </div>

          <div className="event-connection">
            <span className="center-text"> EVENT CONNECTION </span>
          </div>
        </div>

        <div className="calendar">
          <span className="center-text"> CALENDAR </span>
        </div>
      </div>
    </div>
  );
}

export default App;
