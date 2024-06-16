import "./App.css";
import HomeLayout from "./pages/layout/homeLayout";
import Register from "./pages/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Records from "./pages/records";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="register" element={<Register />} />
        <Route path="records" element={<Records />} />
      </Routes>
    </Router>
  );
}

export default App;
