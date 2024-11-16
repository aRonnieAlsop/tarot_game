import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    console.log('Cards clicked!');
    navigate('/cardspread');
  };

  return (
    <div className="landing-page">
      {/* Tarot Card Stack */}
      <div className="tarot-stack" onClick={handleCardClick}>
        {/* layers to mimic a stack */}
        <div className="tarot-card back-pattern"></div>
        <div className="tarot-card back-pattern"></div>
        <div className="tarot-card back-pattern"></div>
      </div>
    </div>
  );
};

export default LandingPage;
