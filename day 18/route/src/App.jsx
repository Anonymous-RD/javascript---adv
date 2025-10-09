import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MainRoute from "./components/MainRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="home">
      hello
      <MainRoute></MainRoute>
    </div>
  );
}

export default App;
