import mongoose from "mongoose";
import colors from "colors";
import { exit} from 'node:process'

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL);
        const url  = connection.host + ":" + connection.port;
        console.log(colors.cyan.bold('Mongo DB connected in: ' + url))
    }catch(err) {
        console.log(colors.red.bold('Error with connection to DB'));
        exit(1);
    }
} 