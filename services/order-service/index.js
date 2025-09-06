const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(bodyParser.json());

// Routes pour gestion des commandes
app.post('/orders', (req, res) => {
    // logique de création de commande
});

app.get('/orders/:id', (req, res) => {
    // logique pour obtenir une commande par ID
});

app.listen(PORT, () => {
    console.log(`Service Commandes en cours d'exécution sur le port ${PORT}`);
});