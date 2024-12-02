import React from 'react';
import './OneCardDraw.css';

const OneCardDraw = () => {
    return (
        <div className="landing-page">
          {/* Tarot Card Stack */}
          <div className="tarot-stack">
            {/* layers to mimic a stack */}
            <div className="tarot-card back-pattern"></div>
            <div className="tarot-card back-pattern"></div>
            <div className="tarot-card back-pattern"></div>
          </div>
        </div>
      );
};

export default OneCardDraw;