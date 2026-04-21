
import User from './models/user.js';

const postSignup = async(req, res) => {
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

    if (nameValidationRegex.test(name) == false){
        return res.status(400).json({
            success: false,
            message: "Name is invaild"
        }); 
    }
    if (emailValidationRegex.test(email) == false){
        return res.status(400).json({
            success:false,
            message: "Email is invalid",
        });
    }
    if (passwordValidationRegex.test(password) == false){
        return res.status(400).json({
            success:false,
            message:"Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one numbet and on speacil character",
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

const postLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    const user = await User.findOne({ email, password});
    if (user) {
        return res.json({
            success: true,
            message:"User loged in successfully",
            user: user, 
        });
    } else {
         return res.status(400).json({
            success: false,
            message: "Invalid email or password"
        });
    }
};




export { postLogin, postSignup };