const express = require('express');
const { getAllTherapist } = require('../controllers/therapist-controller');

const { signup, login, getUser } = require('../controllers/user-controller') ;
const fetchUser = require('../middleware/fetchUser');

const userRouter = express.Router();


userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/getuser", fetchUser,getUser);
userRouter.get("/getAllTherapist", fetchUser, getAllTherapist);


module.exports =userRouter