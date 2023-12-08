import React, { useState } from "react";
import CatSprite from "./CatSprite";

export default function MidArea({ rotation, left, top, setLeft, setTop, showHello, showHello2Seconds, catSpriteSize }) {
  const catSpriteStyle = {
    transform: `rotate(${rotation}deg)`, // Apply rotation only to the CatSprite
  };

  const catSpriteWrapperStyle = {
    transform: `scale(${catSpriteSize})`, // Apply scale to the wrapper div
  };
  return (
    <div className="flex-1 h-full overflow-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div className="svg-container" style={{ left: `${left}px`, top: `${top}px` }}>
        <div style={catSpriteWrapperStyle}>
          <CatSprite rotation={rotation} style={catSpriteStyle} />
        </div>

        {showHello && <div className="speech-bubble">Hello</div>}
        {showHello2Seconds && <div className="speech-bubble">Hello</div>}
      </div>
    </div>
  );
}
