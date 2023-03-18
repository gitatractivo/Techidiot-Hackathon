import "./App.css";
import Hero from "./pages/Hero";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/review" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
=======
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      {/* <Hero></Hero> */}
      <Signup></Signup>
    </div>
>>>>>>> a212fc54e87c456f6a0cdb9818ae00e0a27ec7aa
  );
}

export default App;
