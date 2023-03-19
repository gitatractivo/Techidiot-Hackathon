import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  TextField,
} from "@mui/material";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      console.log(credentials);
      const resp = await axios.post(
        "http://localhost:5000/user/signup",
        credentials
      );
      const { token } = resp.data;
      localStorage.setItem("token", token);
      // onLogin function
      // console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="w-5/6 mx-auto flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col basis-1/2 gap-10 items-center justify-center">
          <h1 className="text-4xl bg-gradient-to-r from-blue-600 to-green-300 text-transparent bg-clip-text">
            "I will love the light for it shows me the way, yet I will endure
            the darkness because it shows me the stars."
          </h1>
          <p className="text-2xl font-bold capitalize">
            Og Mandino
          </p>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col gap-12 px-20 py-20">
            <FormControl>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="password"
                label="password"
                type="password"
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <TextField
                id="age"
                label="Age"
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
