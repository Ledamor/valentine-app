import { useState } from "react";
import "./App.css";

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  
  // Start with standard positioning, then switch to absolute movement
  const [noStyle, setNoStyle] = useState<{ position: string; top?: string; left?: string }>({
    position: "static", // Start in the normal layout flow
  });

  const moveNoButton = () => {
    // Generate random coordinates within the visible window
    // We subtract approx button dimensions (150 width, 50 height) to keep it on screen
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    setNoStyle({
      position: "fixed", // Allows it to move freely over everything
      left: `${x}px`,
      top: `${y}px`,
    });
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        /* --- SUCCESS STATE --- */
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yay!!! Happy Valentine's Day!</div>
        </>
      ) : (
        /* --- QUESTION STATE --- */
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/kaDrWwF4mJ4AAAAi/bear-love.gif"
          />

          <div className="text">Will you be my Valentine?</div>
          
          <div className="button-container">
            <button
              className="yes-button"
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            
            {/* We wrap the No button in a generic div to help with spacing 
               when the button goes 'fixed' and leaves the flow 
            */}
            <button 
              className="no-button"
              // @ts-ignore
              style={noStyle} 
              onMouseEnter={moveNoButton} 
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;