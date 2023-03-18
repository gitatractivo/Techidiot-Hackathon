import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name"></label>
        </p>
        <input type="text" name="" placeholder="ENTER YOUR NAME" />
        <p>
          <label htmlFor="name"></label>
        </p>
        <input type="text" name="password" placeholder="ENTER YOUR PASSWORD" />
      </form>
    </div>
  );
};

export default Login;
