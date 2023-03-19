import React, { useState } from "react";
import { FormControl, TextField, Button } from "@mui/material";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const resp = await axios.post(
        "http://localhost:5000/user/login",
        credentials
      );
      const { token } = resp.data;
      localStorage.setItem("token", token);
      // onLogin function
    } catch (error) {
      // console.log("message",error.response.data.message);
      // console.log(error.AxiosError);
      // alert(error.response.data.message);
    }
    console.log(credentials);
  };

  return (
    <div className="w-5/6 mx-auto flex flex-col gap-10 md:flex-row md:justify-between mt-10">
      <div className="flex flex-col basis-1/2 gap-10 items-center justify-center ">
        <h1 className="text-4xl bg-gradient-to-r from-blue-600 to-green-300 text-transparent bg-clip-text">
          "I will love the light for it shows me the way, yet I will endure the
          darkness because it shows me the stars."
        </h1>
        <p>Og Mandino</p>
      </div>
      <div className="basis-1/2">
        <div className="flex flex-col gap-24 px-20 py-20">
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
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
