import React, { useEffect, useState } from "react";
import "./online-status.css"; 

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Check event type and update state accordingly
  const handleStatusChanged = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    // Add event listeners for online and offline events
    window.addEventListener("online", handleStatusChanged);
    window.addEventListener("offline", handleStatusChanged);

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener("online", handleStatusChanged);
      window.removeEventListener("offline", handleStatusChanged);
    };
  }, []);

  return (
    <div className="online-status-main">
      <div className="online-status-container">
        <h1>Online Status Checker</h1>
        <p>Your current internet status:</p>
        <div
          className={`status-indicator ${
            isOnline ? "status-online" : "status-offline"
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </div>
      </div>
    </div>
  );
};

export default OnlineStatus;
