import React from "react";
import { useEffect, useState } from "react";

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
    <div>
      <h1>Timer Cleanup</h1>
      <h2>Second : {count}</h2>
    </div>
  );
};

export default TimerCleanup;
