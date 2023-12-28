import mongoose from "mongoose";

async function  connectDB() {
    const dbUri : string = process.env.MONGO_URL + "";

    try {
        await mongoose.connect(dbUri);
        console.log("DB connected");
    } catch (error : any) {
        console.log("Could not connect to db")
        console.log(error.message)
        process.exit(1);
    }
}

export default connectDB;