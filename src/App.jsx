import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [bgColor, setBgColor] = useState('white'); 

  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor); 
  };

  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      <h1 className="title" style={{ color: bgColor === 'white' ? 'black' : 'white' }}>
        Background Color: {bgColor}
      </h1>
      <button className="color-button" onClick={changeColor}>
        Change Background Color
      </button>
    </div>
  );
};

export default App;