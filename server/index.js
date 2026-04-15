import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postSignup,postLogin } from "./controllers/user.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDb connections code // 
const connectDB = async () => {
  try{
    const connetion = await mongoose.connect(process.env.MONGODB_URL);
    if(connetion){
      console.log("MONGODB CONNECTED");
    }
  } catch (error){
    console.error("Error connecting to MongoDB:", error);
  }
}; 
 
app.get("/",(req, res) => {
  res.json({
    success:true,
    message:"Welcome to the tiny blog app server!🙂",
  });
});

app.get("/api/test",( req, res)=>{
  res.json({
    message: "API is working fine!🙂"});
});

app.post("/signup",postSignup);

app.post("/login",postLogin);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();// MongoDB connenction called here //
});

