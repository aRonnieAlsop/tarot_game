import React, { useState, useEffect } from 'react';
import './OneCardDraw.css';

const OneCardDraw = () => {
    const [message, setMessage] = useState("Think about your question for the cards now...");
    const [showBubble, setShowBubble] = useState(true);
    const [showNeonSign, setShowNeonSign] = useState(false);

    useEffect(() => {
        //update message & control visibility of elements
        const messageTimeouts = [
            setTimeout(() => setMessage("Really focus hard on your question..."), 4000),
            setTimeout(() => setShowBubble(false), 8000), // Hide the bubble
            setTimeout(() => setShowNeonSign(true), 8500), // Show neon sign
        ];

        return () => {
            messageTimeouts.forEach(clearTimeout);
        }
    }, []);

    return (
        <div className="one-card-draw">
          {/* Tarot Card Stack */}
          <div className="tarot-stack">
            {/* layers to mimic a stack */}
            {/* <div className="tarot-card back-pattern"></div>
            <div className="tarot-card back-pattern"></div>
            <div className="tarot-card back-pattern"></div> */}
          </div>

          {/* Fortune Teller Bubble */}
          {showBubble && (
            <div className="fortune-bubble">
                <p>{message}</p>
            </div>
          )}

          {/* Neon Sign */}
          {showNeonSign && <div className="neon-sign">Draw Card</div>}
        </div>
      );
};

export default OneCardDraw;