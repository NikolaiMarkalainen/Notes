import dotenv from 'dotenv';
dotenv.config();
import { Config } from '../types';

const config : Config = {
    USER: process.env.DB_USER || '',
    HOST: process.env.DB_HOST || '',
    NAME: process.env.DB_NAME || '',
    PASSWORD: process.env.DB_PASSWORD || '',
    // paradix , 10 if necessary interpreting strings to numbers
    DB_PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 5000
};

export default config;