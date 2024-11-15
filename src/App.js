import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {

  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  }

  return (
    <Router>
      <div>
        {/* Global Title */}
        <div className="global-title">TAROT</div>

        {/* Pop-Up Disclaimer */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <h2 className="neon-text">For Entertainment Purposes Only</h2>
              <button className="close-popup" onClick={closePopup}>
                ✖
              </button>
            </div>
          </div>
        )}

        {/* Footer Disclaimer */}
        <footer className="footer">
          <p>For Entertainment Purposes Only</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;
