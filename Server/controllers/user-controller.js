
const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'mental';

const signup = async (req, res, next) => {
     console.log("signup", req.body)
     const { firstName, email, password, lastName, age } = req.body;
     let existingUser;
     try {
          existingUser = await User.findOne({ email });

     } catch (err) {
          return console.log(err);
     }
     if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
     }
     const hashedPassword = bcrypt.hashSync(password);
     const user = new User({
          email,
          password: hashedPassword,
          firstName,
          lastName,
          age,
     });


     try {
          const userData = await user.save();


          const data = {
               user: {
                    _id: userData._id,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    age: userData.age,
                    email: userData.email,

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
     let existingUser;
     try {
          existingUser = await User.findOne({ email });

     } catch (err) {
          return console.log(err);
     }
     if (!existingUser) {
          return res.status(404).json({ message: "User Doesn't exist" });
     }
     const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
     
     if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Incorrect Password" })
     }
     const data = {
          user: {
               _id: existingUser._id,
               firstName: existingUser.firstName,
               lastName: existingUser.lastName,
               age: existingUser.age,
               email: existingUser.email,
          }
     }
     const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '30d' });
     return res.status(201).json({ message: "login successful",authtoken });
     
}


const getUser = async(req,res,next)=>{
     try {
          const userId = req.user._id;
          const user = await User.findById(userId)
          res.send(user)
     } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
     }
}

const options = async (req, res, next) => {
     console.log("userLogin", req.body)
     console.log("userLogin", req.params.user)

     const userId = req.params.user._id;
     const { options } = req.body;
     let existingTherapist;
     try {
          // Find the user by ID
          const user = await User.findById(userId);

          // Check if the user exists
          if (!user) {
               return res.status(404).json({ message: 'User not found' });
          }

          // Update the user object
          user.options = options ;
          
          // Save the updated user object
          const updatedUser = await user.save();

          // Return the updated user object
          return res.status(200).json(updatedUser);
     } catch (error) {
          return res.status(500).json({ message: error.message });
     }
}
module.exports = { login, signup ,getUser,options}