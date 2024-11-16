import React from 'react';
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
    </div>
  );
};

export default CardSpread;
