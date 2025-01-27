import React, { useEffect, useState } from "react";

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
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(data);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>DataFetching</h1>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {data.map((user) => {
            return <li key={user.id}>{user.email}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default DataFetching;
