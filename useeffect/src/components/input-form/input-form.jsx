import React, { useState, useEffect } from "react";
import './input-form.css'

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [loggedValue, setLoggedValue] = useState([]);

  useEffect(() => {
    if (inputValue.trim() !== "" && !loggedValue.includes(inputValue.trim())){
      console.log("input", inputValue);
      setLoggedValue((prev) => [...prev, inputValue.trim()]);
    }
  }, [inputValue, loggedValue]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-form-container">
      <div className="input-form-box">
        <h1>InputForm</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Text something"
        />

        <h2>Logged Input Values:</h2>
        <ul>
          {loggedValue.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputForm;
