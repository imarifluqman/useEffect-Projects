import React, { useEffect, useState } from "react";

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
    setQuery(""); // Clear the query (input field)
    setDebounced(""); // Optionally clear the debounced value
  };

  return (
    <div>
      <h1>DebouncedInput</h1>
      <input type="text" value={query} onChange={handleQuery} />
      <button onClick={clearInput}>Clear Input Field</button>
      <p>Debounced Search Query: {debounced}</p>
    </div>
  );
};

export default DebouncedInput;

// extra:https://youtu.be/qHKHASOuuFA?si=iulh4A-TasZXT0Br
