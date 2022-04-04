import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/ReduxHooks";
import { decrement, increment, reset, manualSet } from "./stores/Count-slice";
import logo from "./logo.svg";
import { useRef } from "react";

function App() {
  const inputValue = useRef<HTMLInputElement>(null);

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(increment());
  }

  function changeState() {
    dispatch(manualSet(inputValue.current!.valueAsNumber));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <input type="number" ref={inputValue} />
        <button onClick={changeState}>Set now!</button>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
