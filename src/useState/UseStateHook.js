import React from "react";
import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleOnClick = () => {
    setCount(count + 1);
  };

  const handleOnChange = (e) => {
    setInputValue(e);
  };

  return (
    <div>
      {count}
      <button onClick={handleOnClick}>increment</button>
      <input type="text" onChange={(e) => handleOnChange(e.target.value)} />
      <h3>{inputValue}</h3>
    </div>
  );
}

export default UseStateHook;
