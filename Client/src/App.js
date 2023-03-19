import "./App.css";
import Hero from "./pages/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Faqs from "./pages/Faqs";
import Therapist from "./pages/Therapist";
import MultiStepForm from "./pages/MultiStepForm";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Navbar isTopOfPage={isTopOfPage} />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/review" element={<Reviews />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/faqs" element={<Faqs />}></Route>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/form" element={<MultiStepForm />}></Route>
        <Route path="/therapist" element={<Therapist/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
