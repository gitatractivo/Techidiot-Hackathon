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
    <div className="w-5/6 mx-auto flex flex-col gap-10 md:flex-row md:justify-between mt-10">
      <div className="flex flex-col">
        <h1></h1>
        <p></p>
      </div>
      <div >
        <form className="form" onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name"></label>
          </p>
          <input type="text" name="" placeholder="ENTER YOUR NAME" />
          <p>
            <label htmlFor="name"></label>
          </p>
          <input
            type="text"
            name="password"
            placeholder="ENTER YOUR PASSWORD"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
