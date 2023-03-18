import "./App.css";
import Hero from "./pages/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Faqs from "./pages/Faqs"
import MultiStepForm from "./pages/MultiStepForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/review" element={<Reviews />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/faqs" element={<Faqs/>}></Route>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/form" element={<MultiStepForm/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
