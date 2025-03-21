import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import pool from './database.js';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({"Message": "Bienvenue sur notre api backend de portfolio"}); 
});

app.post("/submit-form", async (req, res) => {
    const { name, email, phone, message, catchapa } = req.body;
    const formData = req.body;
    console.log("Données reçues :", formData);

    try {
        const result = await pool.query(
            "INSERT INTO users (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, phone, message]
        );

        res.json({ message: "Formulaire soumis avec succès !", data: result.rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'enregistrement des données" });
    }
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
