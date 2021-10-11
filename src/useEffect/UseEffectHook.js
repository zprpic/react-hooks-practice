import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectHook() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[0].email);
      console.log("useEffect called");
    });
  }, [count]);

  const handleOnClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      hello world {data}
      <div>{count}</div>
      <button onClick={handleOnClick}>increment</button>
    </div>
  );
}

export default UseEffectHook;
