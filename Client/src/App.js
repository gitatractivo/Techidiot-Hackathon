import "./App.css";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/faq"></Route>
        <Route path="/" element={<Hero />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
