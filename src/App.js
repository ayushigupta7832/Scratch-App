import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";

export default function App() {
  const [rotation, setRotation] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [showHello, setShowHello] = useState(false); 
  const [showHello2Seconds, setShowHello2Seconds] = useState(false); 
  const [catSpriteSize, setCatSpriteSize] = useState(1); 

  const handleRun = () => {
    setLeft(left + 10);
  };

  const handleRotate = () => {
    setRotation((prevRotation) => (prevRotation + 15) % 360);
  };

  const handleRotateCounterclockwise = () => {
    setRotation((prevRotation) => (prevRotation - 15 + 360) % 360);
  };

  const handleRandomPosition = () => {
    const newLeft = Math.random() * 400; 
    const newTop = Math.random() * 400; 
    setLeft(newLeft);
    setTop(newTop);
  };


  const handleSayHello = () => {
    setShowHello(true);
  };
  const handleSayHello2Seconds = () => {
    setShowHello2Seconds(true);
    setTimeout(() => {
      setShowHello2Seconds(false);
    }, 2000); 
  }

  const handleIncreaseSize = () => {
    setCatSpriteSize((size) => size + 0.1); 
  }

  const handleDecreaseSize = () => {
    setCatSpriteSize((size) => size - 0.1); 
  }

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            onRun={handleRun}
            onRotate={handleRotate}
            onRotateCounterclockwise={handleRotateCounterclockwise}
            onRandomPosition={handleRandomPosition}
            onSayHello={handleSayHello} 
            onSayHello2Seconds={handleSayHello2Seconds} 
            onIncreaseSize={handleIncreaseSize} 
            onDecreaseSize={handleDecreaseSize}
          />
          <MidArea rotation={rotation} left={left} top={top} showHello={showHello} showHello2Seconds={showHello2Seconds} catSpriteSize={catSpriteSize} /> 
        </div>
      </div>
    </div>
  );
}
