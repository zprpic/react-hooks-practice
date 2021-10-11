import React from "react";
import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <button onClick={handleOnClick}>increment</button>
    </div>
  );
}

export default UseStateHook;
