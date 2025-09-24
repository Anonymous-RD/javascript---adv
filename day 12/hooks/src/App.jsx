import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Api from "./Api";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      hello
      <Api></Api>
    </div>
  );
}

export default App;
