import React, { useState, useEffect } from "react";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [loggedValue, setLoggedValue] = useState([]);

  useEffect(() => {
    if (inputValue !== "") {
      console.log("input", inputValue);
      setLoggedValue((e) => [...e, inputValue]);
    }
  }, [inputValue]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  return (
    <div>
      <h1>InputForm</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Text something"
      />

      <h2>Logged Input Values:</h2>
      <ul>
        {loggedValue.map((value, index) => {
          return <li>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default InputForm;
