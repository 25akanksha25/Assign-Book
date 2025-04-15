import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to mongo");
    }
    catch(err)
    {
        console.log("error connecting to mongo");
    }
}


export default connectDb;