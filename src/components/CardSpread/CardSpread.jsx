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
        <NavLink to="/one-card" className="nav-link" activeClassName="active">
          One Card
        </NavLink>
        <NavLink to="/draw-three" className="nav-link" activeClassName="active">
          Draw Three
        </NavLink>
        <NavLink to="/cross" className="nav-link" activeClassName="active">
          Cross
        </NavLink>
        <NavLink to="/horseshoe" className="nav-link" activeClassName="active">
          Horseshoe
        </NavLink>
      </nav>
      </div>
    </div>
  );
};

export default CardSpread;
