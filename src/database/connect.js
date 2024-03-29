import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const DBConnect = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            console.log(`\n MongoDB connected! DB HOST: ${connect.connection.host}`);
    } catch (error) {
        console.log(`MONGODB connection FAILED!`, error);
        process.exit(1);
    }
}

export default DBConnect;