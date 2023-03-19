import React, { useState } from "react";
import {
  Grid,
  TextField,
  Card,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

const WelcomeScreen = () => {
  const [state, setstate] = useState({
    email: "",
    room: "",
  });
  const login = () => {
    const { email, room } = state;
    if (email && room) {
      this.props.history.push("chat", { room, email });
    }
  };
  return <div>Chat</div>;
};

export default WelcomeScreen;
