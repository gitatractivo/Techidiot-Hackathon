import "./App.css";
import Hero from "./pages/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/review" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
