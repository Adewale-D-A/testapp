// import React from "react";
import { useContext } from "react";
import {
  overallState,
  context1,
  context2,
  context3,
} from "./ContextHook/context";
import "./componentsCss/StateChanger.css";

const StateChange = () => {
  const { contextHook1, setContextHook1 } = useContext(context1);
  const { contextHook2, setContextHook2 } = useContext(context2);
  const { contextHook3, setContextHook3 } = useContext(context3);
  const { contextStateAll, setContextStateAll } = useContext(overallState);

  return (
    <div>
      <div className="react-component-one">
        <button
          className="state-chng-btn"
          onClick={() => setContextStateAll(!contextStateAll)}
        >
          Toggle All state
        </button>
        <br />
        <button
          className="state-chng-btn"
          onClick={() => setContextHook1(!contextHook1)}
        >
          Change Component One State
        </button>
        <br />
        <button
          className="state-chng-btn"
          onClick={() => setContextHook2(!contextHook2)}
        >
          Change Component Two State
        </button>
        <br />
        <button
          className="state-chng-btn"
          onClick={() => setContextHook3(!contextHook3)}
        >
          Change Component Three State
        </button>
        <br />
      </div>
    </div>
  );
};

export default StateChange;
