import React, { useEffect, useState } from "react";
import './data-fetch.css';

const DataFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="data-fetch-container">
      <div className="data-fetch-box">
        <h1>Data Fetching</h1>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">Error: {error.message}</div>
        ) : (
          <ul className="data-list">
            {data.map((user) => {
              return <li key={user.id} className="data-item">{user.email}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DataFetching;
