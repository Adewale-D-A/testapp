// import React from "react";
import { useContext } from "react";
import { context3, overallState } from "./ContextHook/context";

const ComponentThree = () => {
  const { contextHook3, setContextHook3 } = useContext(context3);
  const { contextStateAll, setContextStateAll } = useContext(overallState);

  return (
    <div>
      <div className="react-component-one">
        <h3>Third ReactJS Component</h3>
        <h2>Component Three UseState Value: {contextHook3.toString()}</h2>
        <h2>Overall State Value: {contextStateAll.toString()}</h2>
        <button onClick={() => setContextHook3(!contextHook3)} className="btn">
          Change State
        </button>
      </div>
    </div>
  );
};

export default ComponentThree;
