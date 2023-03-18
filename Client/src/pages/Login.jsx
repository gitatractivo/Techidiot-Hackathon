import React, { useState } from "react";
import { FormControl, InputLabel, Input, FormHelperText,Button } from "@mui/material";

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
      <div className="flex flex-col basis-1/2 gap-10 items-center justify-center ">
        <h1 className="text-4xl">
          "I will love the light for it shows me the way, yet I will endure the
          darkness because it shows me the stars."
        </h1>
        <p>Og Mandino</p>
      </div>
      <div className="basis-1/2">
        <div className="flex flex-col gap-24 px-20 py-20">
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input id="my-password" aria-describedby="my-password-text" />
            <FormHelperText id="my-password-text">
              We'll never share your password.
            </FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
