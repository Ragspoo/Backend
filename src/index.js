import DBconnect from "./database/connect.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})

DBconnect();