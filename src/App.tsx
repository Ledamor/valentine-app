import { useState } from "react";
import "./App.css";

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  
  // State to track the position of the "No" button
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "auto", left: "auto", position: "static" });

  // Function to move the button to a random spot
  const moveNoButton = () => {
    const maxWidth = window.innerWidth - 100; // Subtract button width approx
    const maxHeight = window.innerHeight - 50; // Subtract button height approx

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    setNoButtonPosition({
      top: `${randomY}px`,
      left: `${randomX}px`,
      position: "absolute", // Switch to absolute positioning so it can move anywhere
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
          <div className="text">Yay!!! You officially my valentine!!!!!!</div>
          <div className="text"> I love you so muchhhh!!!

             
          </div>
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
            
            <button 
              className="no-button"
              onMouseEnter={moveNoButton} // Moves when mouse touches it
              onClick={moveNoButton}      // Moves if they manage to click fast on mobile
              // @ts-ignore
              style={noButtonPosition}
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