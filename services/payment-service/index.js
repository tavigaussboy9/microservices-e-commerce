const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(bodyParser.json());

// Routes pour gestion des paiements
app.post('/payments', (req, res) => {
    // logique de traitement de paiement
});

app.listen(PORT, () => {
    console.log(`Service Paiements en cours d'exécution sur le port ${PORT}`);
});