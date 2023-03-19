import React,{useState} from "react";
import {
  Grid,
  TextField,
  Card,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";



const Chat = () => {
    const login = () => {
      const { email, room } = this.state;
      if (email && room) {
        this.props.history.push("chat", { room, email });
      }
    };
    const [state, setstate] = useState({
      email: "",
      room: "",
    });
  return (
    <div>Chat</div>
  )
}

export default Chat