const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

// Routes pour gestion des produits
app.post('/products', (req, res) => {
    // logique d'ajout d'un produit
});

app.get('/products', (req, res) => {
    // logique pour obtenir tous les produits
});

app.listen(PORT, () => {
    console.log(`Service Produits en cours d'exécution sur le port ${PORT}`);
});