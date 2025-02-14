import React, { useState, useEffect } from "react";
import "./window-resize.css"; // Make sure to create this CSS file

const WindowResize = () => {
  const [windowWidth, setWindowWidth] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectWindowSize = () => {
    setWindowWidth({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowSize);
    return () => {
      window.removeEventListener("resize", detectWindowSize);
    };
  }, []);

  return (
    <div className="window-body">
    <div className="window-resize-container">
      <h1 className="title">Window Resize</h1>
      <p className="info">Current Width: {windowWidth.winWidth}</p>
      <p className="info">Current Height: {windowWidth.winHeight}</p>
    </div>
    </div>
  );
};

export default WindowResize;
