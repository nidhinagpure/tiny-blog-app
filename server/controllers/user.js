
import User from '../models/User.js';

const postSignup = async(req, res) => {
    try {
    const { name, email, password } = req.body;

    const emailValidationRegex = /^[^@]+@[^@]+\.[^@]+$/;
    const nameValidationRegex = /^[a-zA-Z\s]+$/;
    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if ( !name || !email || !password) {
        return res.status(400).json({
            success:false,
            message:"Name, email and Password are required",
        });
    }

    if (!nameValidationRegex.test(name)){
        return res.status(400).json({
            success: false,
            message: "Name is invalid"
        }); 
    }

    if (!emailValidationRegex.test(email)){
        return res.status(400).json({
            success:false,
            message: "Email is invalid",
        });
    }

    if (!passwordValidationRegex.test(password)){
        return res.status(400).json({
            success:false,
            message:"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number and one special character",
        });
    }

    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: `User with email ${email} already exists!`,
        });
    }

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: savedUser,
    });

    } catch (error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Server error"
        });
}

};

const postLogin = async (req, res) => {
    try{
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    const user = await User.findOne({ email});
    // ! check both email and password 
    if (!user || user.password !== password) {
        return res.status(400).json({
            success: false,
            message: "Invalid email or password"
        });
    } 
         return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: user
        });

    } catch (error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message: "server error"
        });
    }
};

export { postLogin, postSignup }