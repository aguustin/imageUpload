import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const MOONGOSE_URI = process.env.MOONGOSE_URI;