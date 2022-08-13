// import React from "react";
import { useContext } from "react";
import { context1, overallState } from "./ContextHook/context";
import "./componentsCss/ComponentOne.css";

const ComponentOne = () => {
  const { contextHook1, setContextHook1 } = useContext(context1);
  const { contextStateAll, setContextStateAll } = useContext(overallState);

  const ToggleAndShow = (classItem) => {
    if (contextHook1) {
      const item = document.getElementsByClassName(classItem);
      item[0].style.display = "none";
      setContextHook1(!contextHook1);
    } else {
      const item = document.getElementsByClassName(classItem);
      item[0].style.display = "";
      setContextHook1(!contextHook1);
    }
  };
  return (
    <div>
      <div className="react-component-one">
        <h3>First ReactJS Component</h3>
        <h2>Component One Value: {contextHook1.toString()}</h2>
        <h2>Overall State Value: {contextStateAll.toString()}</h2>
        <div className="hidden">
          <h4>I want to be hidden</h4>
        </div>
        <button onClick={() => ToggleAndShow("hidden")} className="btn">
          Change State {"&"} Hide
        </button>
      </div>
    </div>
  );
};

export default ComponentOne;
