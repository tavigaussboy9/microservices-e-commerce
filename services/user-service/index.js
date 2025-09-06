const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Routes pour gestion des utilisateurs
app.post('/register', (req, res) => {
    // logique d'inscription
});

app.post('/login', (req, res) => {
    // logique de connexion
});

app.listen(PORT, () => {
    console.log(`Service Utilisateur en cours d'exécution sur le port ${PORT}`);
});