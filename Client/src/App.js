import "./App.css";
import Hero from "./pages/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/review" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
