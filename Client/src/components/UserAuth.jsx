import { useState, useEffect } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const login = () => setLoggedIn(true);
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return { loggedIn, login, logout };
};

export default useAuth;
