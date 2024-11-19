import React from 'react';
import { NavLink } from 'react-router-dom';
import './CardSpread.css'; 

const CardSpread = () => {
  return (
    <div className="card-spread">
     {/* Navigation Bar */}
      
      <h2 className="nav-title">
            <span className="title-line">Choose</span>
            <span className="title-line">Your</span>
            <span className="title-line">Spread</span>
     </h2>
    <div className="nav-section">
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
