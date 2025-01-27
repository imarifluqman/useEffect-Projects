import React, { useEffect, useState } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Check event type and update state accordingly
  const handleStatusChanged = () => {
    setIsOnline(event.type === "online");
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
    <div>
      <h1>OnlineStatus Checker</h1>
      <p>{isOnline ? "You are online" : "You are offline"}</p>
    </div>
  );
};

export default OnlineStatus;
