import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Api from "./Api";
import Data from "./Data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      App
      {/* <Api></Api> */}
      <Data></Data>
    </div>
  );
}

export default App;
