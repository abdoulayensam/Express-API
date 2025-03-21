import pkg from 'pg';
const {Pool} = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
pool.connect()
    .then(() => console.log('Connecté à PostgreSQL'))
    .catch((err) => console.error('Echec de la connexion à PostgreSQL ', err));

export default pool;
