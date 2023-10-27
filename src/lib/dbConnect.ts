
import mongoose, { ConnectOptions } from 'mongoose';

const connection: any = {};

async function dbConnect() {
    // /* check if we have connection to our databse*/
    if (connection.isConnected) {
        return;
    }

    /* connecting to our database */
    const db = await mongoose.connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    } as ConnectOptions);

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
