
import User from './../models/user.js';

const postSignup = async(req, res) => {
    const { name, email, password } = req.body;

    if (!name){
        return res.status(400).json({
            success: false,
            message: "Name is required"
        });
    }
    if (!email){
        return res.status(400).json({
            success:false,
            message: "Email is requried",
        });
    }
    if (!password){
        return res.status(400).json({
            success:false,
            message:"Password is requied",
        });
    }
    

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: `User with email ${email} already existes!`,
        });
    }

    const newUser = new User({ name, email, password });

    const savedUser = await newUser.save();

    res.json({
        success: true,
        message: "User registered successfully",
        user: savedUser,
    });
};

const postLogin = (req, res) => {};

export { postLogin, postSignup };