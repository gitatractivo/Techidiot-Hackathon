require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const userRouter = require("./routes/user-routes");
const { login } = require('./controllers/user-controller');
const therapistRouter = require('./routes/psy-routes');
const syncServiceDetails = require('./routes/sync_service_details');

const port = 5000;


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json())
// routes
app.use("/user", userRouter);
app.use("/therapist", therapistRouter);





try {
    mongoose.connect('mongodb+srv://gitatatractivo:1234@cluster0.7vdupjk.mongodb.net/test')
        .then(console.log("Connected to Atlas 💎"))
} catch (error) {
    console.log(error)


}
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} 🚀`);
});