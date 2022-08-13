import React, { useState } from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import {
  overallState,
  context1,
  context2,
  context3,
} from "./components/ContextHook/context";
import "./App.css";
import StateChange from "./components/StateChanger";

// export const HandleSecond = (classItem) => {
//   const item = document.getElementsByClassName(classItem);
//   item[0].style.display = "none";
// };

function App() {
  //useContext overall state
  const [contextStateAll, setContextStateAll] = useState(false);
  const [contextHook1, setContextHook1] = useState(true);
  const [contextHook2, setContextHook2] = useState(true);
  const [contextHook3, setContextHook3] = useState(true);

  const [displayMain, setDisplayMain] = useState(true);
  const [hideItem, setHideItem] = useState(false);
  const [hideShowTxt, setHideShowTxt] = useState("Hide");

  const HandleSecond = (classItem) => {
    if (hideItem) {
      // alert("Item hidden");
      const item = document.getElementsByClassName(classItem);
      item[0].style.display = "none";
      setHideItem(!hideItem);
      setHideShowTxt("Show");
    } else {
      // alert("running true");
      const item = document.getElementsByClassName(classItem);
      item[0].style.display = "";
      setHideItem(!hideItem);
      setHideShowTxt("Hide");
    }
  };
  const [spinner, setSpinner] = useState(false);
  const HandleSubmit = (Loader, submit) => {
    if (spinner) {
      const item1 = document.getElementsByClassName(Loader);
      const item2 = document.getElementsByClassName(submit);
      item1[0].style.display = "block";
      item2[0].style.display = "none";
      setSpinner(!spinner);
    } else {
      const item1 = document.getElementsByClassName(Loader);
      const item2 = document.getElementsByClassName(submit);
      item1[0].style.display = "none";
      item2[0].style.display = "block";
      setSpinner(!spinner);
    }
  };
  return (
    <context1.Provider value={{ contextHook1, setContextHook1 }}>
      <context2.Provider value={{ contextHook2, setContextHook2 }}>
        <context3.Provider value={{ contextHook3, setContextHook3 }}>
          <overallState.Provider
            value={{ contextStateAll, setContextStateAll }}
          >
            <div className="App">
              <header className="App-header">
                <div>
                  <span>Sample Project</span>
                </div>
                <div className="app-nav-2">
                  <div
                    className="nav-content"
                    onClick={() => setDisplayMain(true)}
                  >
                    <span>useContext sample</span>
                  </div>
                  <div
                    className="legend nav-content"
                    onClick={() => setDisplayMain(false)}
                  >
                    <span>JS display content</span>
                  </div>
                </div>
              </header>
              {displayMain ? (
                <div className="useContext-main-1">
                  <main>
                    <div>
                      <div className="useContext-body">
                        <span>
                          <b>useContext:</b> A global useState, used in passing
                          variable between components. An alternative of Redux.
                        </span>
                        <p>
                          In this basic example, I am using a single useState in
                          3 components
                        </p>
                        <p>
                          <span>
                            For reference: watch Youtube Content from
                            <a href="https://www.youtube.com/watch?v=lnL6gRkQ5g8">
                              <b>@PrdroTech</b>
                            </a>
                          </span>
                        </p>
                        <p>
                          <span>
                            For reference: Personal Git Repository
                            <a href="https://github.com/Adewale-D-A/testapp">
                              <b>@adewale-d-a</b>
                            </a>
                          </span>
                        </p>
                      </div>
                      <div>
                        <button
                          onClick={() => HandleSecond("state-chng")}
                          className="oveall-state-hide"
                        >
                          {hideShowTxt} OverAll State Changer
                        </button>
                        <div className="components-states">
                          <div className="components-count">
                            <ComponentOne />
                            <ComponentTwo />
                            <ComponentThree />
                          </div>
                          <div className="state-chng">
                            <StateChange />
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              ) : (
                <div className="useContext-main-1">
                  <main>
                    <div>
                      <span>
                        Hide/Show Items using vanila javascript in a function
                        body.
                      </span>
                      <p>
                        Perfect usecase for this is the spinner/loader example
                      </p>
                      <div className="spinner-submit">
                        <button
                          onClick={() => HandleSubmit("loader", "submit-txt")}
                          className="spinner-btn"
                        >
                          <span className="submit-txt">Click to Submit</span>
                          <span
                            className="loader"
                            style={{ display: "none" }}
                          ></span>
                        </button>
                      </div>
                      <div className="code-sample">
                        <code>
                          <pre>
                            const [spinner, setSpinner] = useState(false);{" "}
                            <br />
                            const item =
                            document.getElementsByClassName(submit);
                            <br />
                            item[0].style.display = "block";
                            <br />
                            item[0].style.display = "none";
                            <br />
                          </pre>
                        </code>
                      </div>
                    </div>
                  </main>
                </div>
              )}
            </div>
          </overallState.Provider>
        </context3.Provider>
      </context2.Provider>
    </context1.Provider>
  );
}

export default App;
