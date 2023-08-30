import { useState } from "react";
import "./App.css";
import HomeLayout from "./pages/layout/homeLayout";
import Register from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
