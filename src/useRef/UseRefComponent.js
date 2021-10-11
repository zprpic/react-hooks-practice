import React, { useState, useRef } from "react";

function UseRefComponent() {
  const [name, setName] = useState("Prle");

  const inputRef = useRef(null);

  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  const handleOnClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        placeholder="enter name..."
        onChange={handleOnChange}
        ref={inputRef}
      />
      <button onClick={handleOnClick}>Change name</button>
    </div>
  );
}

export default UseRefComponent;
