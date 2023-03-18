import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const port = 6000;


const app = express();
app.use(cors());
app.use(express.json())

// routes


try {
    mongoose.connect('mongodb+srv://gitatatractivo:1234@cluster0.7vdupjk.mongodb.net/test')
        .then(console.log("Connected to Atlas 💎"))
} catch (error) {
    console.log(error)

    
}
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port} 🚀`);
});