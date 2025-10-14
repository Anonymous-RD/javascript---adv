import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchData from "./components/FetchData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      hello api
      <FetchData></FetchData>
      {/* <FetchData></FetchData> */}
    </div>
  );
}

export default App;
