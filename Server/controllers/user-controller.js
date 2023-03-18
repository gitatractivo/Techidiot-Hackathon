
import User from '../models/User';
import bcrypt from 'bcryptjs'


export const signup = async (req, res, next) => {
    console.log("signup", req)
    const { name, email, password } = req.body;
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
        name,
        email,
        password: hashedPassword,
        blogs: [],
    });


    try {
        await user.save();
    } catch (err) {
        console.log(err);

    }
    return res.status(201).json({ user });
}

export const login = async (req, res, next) => {
    console.log("userLogin",req)
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
    return res.status(200).json({ message: "login successful", user: existingUser })
}