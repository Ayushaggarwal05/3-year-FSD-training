import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button
        className="btn btn-primary"
        onClick={() => setCount((count) => count + 1)}>
        NOW CLICK MEE^^
      </button>
      <button
        className="btn btn-primary "
        onClick={() => setCount((count) => count - 1)}>
        Dec Count
      </button>
      <div className="card">
        <button>RED</button>
        <button>GREEN</button>
      </div>
    </>
  );
}

export default App;
