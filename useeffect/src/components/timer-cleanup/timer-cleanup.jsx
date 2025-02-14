import React, { useState, useEffect } from "react";
import "./timer-cleanup.css"; // Import the CSS file

const TimerCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const secId = setInterval(() => {
      setCount((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(secId);
    };
  }, []);

  return (
      <div className="timer-container">
        <h1 className="title">Timer Cleanup</h1>
        <div className="box">
          <h2 className="seconds">Seconds: {count}</h2>
        </div>
      </div>
  );
};

export default TimerCleanup;