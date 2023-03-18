const express = require('express');

const { signup, login, getUser } = require('../controllers/user-controller') ;
const fetchUser = require('../middleware/fetchUser');

const userRouter = express.Router();


userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/getuser", fetchUser,getUser);


module.exports =userRouter