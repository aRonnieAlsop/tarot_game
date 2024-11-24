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

     {/* Navigation Section*/}
    <div className="nav-section">
      <nav className="nav-bar">
        {/*One Card Spread*/}
        <div className="spread-preview">
        <img src="/tarot_assets/one_card.jpg" className="nav-image" />
        <NavLink to="/one-card" className="nav-link" activeClassName="active">
          One Card
        </NavLink>
        </div>
        <div className="spread-preview">
        <img src="/tarot_assets/draw_three.jpg" className="nav-image" />
        <NavLink to="/draw-three" className="nav-link" activeClassName="active">
          Draw Three
        </NavLink>
        <div className="spread-preview">
        <img src="/tarot_assets/cross.jpg" className="nav-image" />
        <NavLink to="/cross" className="nav-link" activeClassName="active">
          Cross
        </NavLink>
        
        </div>
        <div className="spread-preview"> 
        <img src="/tarot_assets/horseshoe.jpg" className="nav-image"/>
        <NavLink to="/horseshoe" className="nav-link" activeClassName="active">
          Horseshoe
        </NavLink>
        </div>
        </div>
      </nav>
      </div>
      </div>
  );
};

export default CardSpread;
