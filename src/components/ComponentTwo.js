// import React from "react";

import { useContext } from "react";
import { context2, overallState } from "./ContextHook/context";

const ComponentTwo = () => {
  const { contextHook2, setContextHook2 } = useContext(context2);
  const { contextStateAll, setContextStateAll } = useContext(overallState);

  return (
    <div>
      <div className="react-component-one">
        <h3>Second ReactJS Component</h3>
        <h2>Component Two UseState Value: {contextHook2.toString()}</h2>
        <h2>Overall State Value: {contextStateAll.toString()}</h2>
        <button onClick={() => setContextHook2(!contextHook2)} className="btn">
          Change State
        </button>
      </div>{" "}
    </div>
  );
};

export default ComponentTwo;
