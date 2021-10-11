import React, { useLayoutEffect, useEffect, useRef } from "react";

function UseLayoutEffectComponent() {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.value = "LOL";
  }, []);

  useLayoutEffect(() => {
    console.log(divRef.current.value);
  }, []);

  return (
    <div>
      <input ref={divRef} type="text" value="PRLE" />
    </div>
  );
}

export default UseLayoutEffectComponent;
