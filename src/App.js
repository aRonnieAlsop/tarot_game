import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import CardSpread from './components/CardSpread/CardSpread';
import OneCardDraw from './components/OneCardDraw/OneCardDraw';

function App() {

  const [showPopup, setShowPopup] = useState(true);
  const [popupClosed, setPopupClosed] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setPopupClosed(true), 500);
  };

  return (
    <Router>
      <div>
        {/* Global Title */}
        <div className="global-title">TAROT</div>
        <Routes>
          <Route path="/" element={<LandingPage popupClosed={popupClosed} />} />
          <Route path="/cardspread" element={<CardSpread />} /> 
          <Route path="/one-card" element={<OneCardDraw />} />
          <Route path="/draw-three" element={<div>Draw Three Page</div>} />
          <Route path="/cross" element={<div>Cross Page</div>} />
          <Route path="/horseshoe" element={<div>Horseshoe Page</div>} />
          <Route path="/cardspread" element={<CardSpread />} />       
          </Routes>
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
