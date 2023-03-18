import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./pages/Reviews";

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
