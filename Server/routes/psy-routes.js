const express = require('express');

const { signup, login, getAllTherapist, getTherapist } = require('../controllers/therapist-controller');
const fetchTherapist = require('../middleware/fetchTherapist');
const fetchUser = require('../middleware/fetchUser');

const therapistRouter = express.Router();


therapistRouter.post("/signup", signup);
therapistRouter.post("/login", login);
therapistRouter.get("/gettherapist", fetchTherapist, getTherapist);



module.exports = therapistRouter