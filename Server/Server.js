const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require("./routes/user-routes");
const { login } = require('./controllers/user-controller');

const port = 5000;


const app = express();
app.use(cors());
app.use(express.json())
// routes
app.use("/user", userRouter);


try {
    mongoose.connect('mongodb+srv://gitatatractivo:1234@cluster0.7vdupjk.mongodb.net/test')
        .then(console.log("Connected to Atlas 💎"))
} catch (error) {
    console.log(error)


}
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} 🚀`);
});