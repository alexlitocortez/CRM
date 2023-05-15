import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeLayout from "./pages/layout/homeLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeLayout />
    </>
  );
}

export default App;
