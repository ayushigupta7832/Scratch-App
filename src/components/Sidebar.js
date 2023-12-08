import React, { useState } from "react";
import Icon from "./Icon";

export default function Sidebar({ onRun, onRotate, onRotateCounterclockwise, onRandomPosition,onSayHello, onSayHello2Seconds ,onIncreaseSize,onDecreaseSize }) {
  const [showHello, setShowHello] = useState(false);

  const handleSayHello = () => {
    setShowHello(true);
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onRun}
      >
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onRotate}
      >
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onRun}
      >
        {"Move Forward"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={onRotateCounterclockwise}>
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={onRotate}>
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer" onClick={onRandomPosition}>
        {"Move to Random Position"}
      </div>
      <div className="font-bold"> {"Looks"} </div>
      {/* "Say Hello" button */}
      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onSayHello} 
      >
        {"Say Hello"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onSayHello2Seconds} 
      >
        {"Say Hello for 2 Seconds"}
      </div>
      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onIncreaseSize} 
      >
        {"Increase Size"}
      </div>

      <div
        className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={onDecreaseSize} 
      >
        {"Decrease Size"}
      </div>
    </div>
  );
}
