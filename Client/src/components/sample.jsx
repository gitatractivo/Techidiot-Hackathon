import React from "react";
import useAuth from "./useAuth";
import LoginForm from "./LoginForm";

const App = () => {
  const { loggedIn, login, logout } = useAuth();

  const handleLogin = () => login();

  const handleLogout = () => logout();

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
