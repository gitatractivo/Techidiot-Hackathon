
const Therapist = require('../models/Therapist');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'mental';

const signup = async (req, res, next) => {
     console.log("signup", req.body)
     const { name, email, password, licenseNumber, address, contactNumber } = req.body;
     let existingTherapist;
     try {
          existingTherapist = await Therapist.findOne({ email });

     } catch (err) {
          return console.log(err);
     }
     if (existingTherapist) {
          return res.status(400).json({ message: "Therapist already exists" });
     }
     const hashedPassword = bcrypt.hashSync(password);
     const therapist = new Therapist({
          email,
          password: hashedPassword,
          firstName,
          lastName,
          age,
     });


     try {
          const therapistData = await therapist.save();


          const data = {
               therapist: {
                    _id: therapistData._id,
                    name: therapistData.name,
                    email: therapistData.email,

               }
          }
          const authtoken = jwt.sign(data, JWT_SECRET,{ expiresIn: '30d' });
          return res.status(201).json({message: "signup successful",authtoken });
     } catch (err) {
          console.log(err);
          return { error: err }

     }

}

const login = async (req, res, next) => {
     console.log("userLogin", req.body)
     const { email, password } = req.body;
     let existingTherapist;
     try {
          existingTherapist = await Therapist.findOne({ email });

     } catch (err) {
          return console.log(err);
     }
     if (!existingTherapist) {
          return res.status(404).json({ message: "User Doesn't exist" });
     }
     const isPasswordCorrect = bcrypt.compareSync(password, existingTherapist.password);
     
     if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Incorrect Password" })
     }
     const data = {
          therapist: {
               _id: existingTherapist._id,
               name: existingTherapist.name,
               email: existingTherapist.email,
          }
     }
     const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '30d' });
     return res.status(201).json({ message: "login successful",authtoken });
     
}


const getTherapist = async(req,res,next)=>{
     try {
          const therapistId = req.therapist._id;
          const therapist = await User.findById(therapistId)
          res.send(therapist)
     } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
     }
}

const getAllTherapist = async (req, res, next) => {
     try {
          const therapists = await User.findMany({})
          res.send(therapists)
     } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
     }
}
module.exports = { login, signup ,getTherapist,getAllTherapist}