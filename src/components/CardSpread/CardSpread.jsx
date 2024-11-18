import React from 'react';
import { NavLink } from 'react-router-dom';
import './CardSpread.css'; 

const CardSpread = () => {
  return (
    <div className="card-spread">
      {/* Tarot Card Stack */}
      <div className="tarot-card-stack">
        <div className="tarot-card back-pattern"></div>
        <div className="tarot-card back-pattern"></div>
        <div className="tarot-card back-pattern"></div>
      </div>

      {/* Navigation Bar */}
      <div className="nav-section">
        <h2 className="nav-title">Choose Your Spread</h2>
      <nav className="nav-bar">
        {/*One Card Spread*/}
        <div className="spread-preview">
        <div className="spread-one-card"></div>
        <NavLink to="/one-card" className="nav-link" activeClassName="active">
          One Card
        </NavLink>
        </div>
        {/*Draw Three Spread*/}
        <div className="spread-preview">
        <div className="spread-draw-three">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
        <NavLink to="/draw-three" className="nav-link" activeClassName="active">
          Draw Three
        </NavLink>
        </div>
        {/*Cross Spread*/}
        <div className="spread-preview">
            <div className="spread-cross">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            </div>
        <NavLink to="/cross" className="nav-link" activeClassName="active">
          Cross
        </NavLink>
        </div>
        {/*Horseshoe Spread*/}
        <div className="spread-preview"> 
            <div className="spread-horseshoe">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            </div>
        <NavLink to="/horseshoe" className="nav-link" activeClassName="active">
          Horseshoe
        </NavLink>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default CardSpread;
