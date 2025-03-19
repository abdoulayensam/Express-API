import pkg from 'pg';
const {Pool} = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((err) => console.error('Failed to connect to PostgreSQL ', err));

export default pool;
