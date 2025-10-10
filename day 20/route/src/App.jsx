import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router";
// import MainRoute from "./components/MainRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="home">
      {/* <TopBar></TopBar> */}
      <h1>App</h1>
      <TopBar></TopBar>
      <Outlet></Outlet>

      {/* <MainRoute></MainRoute> */}
    </div>
  );
}

export default App;
