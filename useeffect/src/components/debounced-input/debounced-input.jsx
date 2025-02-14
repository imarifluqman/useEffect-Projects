import React, { useEffect, useState } from "react";
import "./debounced-input.css";

const DebouncedInput = () => {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(query);
      console.log(debounced);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  const clearInput = () => {
    setQuery("");
    setDebounced("");
  };

  return (
    <div className="debounced-input-container">
      <div className="debounced-input">
        <h1>Debounced Input</h1>

        <input
          type="text"
          value={query}
          onChange={handleQuery}
          placeholder="Type something..."
        />
        <button onClick={clearInput}>Clear Input Field</button>

        <p>Debounced Search Query: {debounced}</p>
      </div>
    </div>
  );
};

export default DebouncedInput;

// extra:https://youtu.be/qHKHASOuuFA?si=iulh4A-TasZXT0Br
