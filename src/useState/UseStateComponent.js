import React, { useState } from "react";

function UseStateComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleOnClick = () => {
    setCount(count + 1);
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {count}
      <button onClick={handleOnClick}>increment</button>
      <input type="text" onChange={handleOnChange} />
      <h3>{inputValue}</h3>
    </div>
  );
}

export default UseStateComponent;
