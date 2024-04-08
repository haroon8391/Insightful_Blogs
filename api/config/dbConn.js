import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbConn = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDb is connected');
    }
    catch (error) {
        console.log(err);
    }
}

export default dbConn;
