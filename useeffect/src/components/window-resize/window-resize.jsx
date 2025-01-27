import React, { useState, useEffect } from "react";

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
    <div>
      <h1>WindowResize</h1>
      <p>Current Width Of Window {windowWidth.winWidth}</p>
      <p>Current Height Of Window {windowWidth.winHeight}</p>
    </div>
  );
};

export default WindowResize;
