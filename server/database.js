import mongoose from "mongoose";
import { MOONGOSE_URI } from './config.js';

export const connectionDB = async () => {

    try {
        mongoose.set('strictQuery',false);
        const db = await mongoose.connect(MOONGOSE_URI, {useNewUrlParser: true});
        console.log("conectado a base de datos ");
    } catch (error) {
        console.log("No se pudo conectar a la base de datos");
    }
}