import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeLayout from "./pages/layout/homeLayout";
import Header from "../src/components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <HomeLayout />
    </>
  );
}

export default App;
