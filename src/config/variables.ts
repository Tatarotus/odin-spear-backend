import dotenv from 'dotenv';

dotenv.config();

export const DB_STRING = process.env.DB_STRING!;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const PORT = process.env.PORT!;
