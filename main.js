const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta atual
app.use(express.static(__dirname));

// Redireciona / para index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Dados dos heróis (exemplo simplificado)
const heroes = [
    {
        name: "Superman",
        alias: "Clark Kent / Kal-El",
        team: "Liga da Justiça",
        powerLevel: "Ômega"
    },
    {
        name: "Batman",
        alias: "Bruce Wayne",
        team: "Família Bat",
        powerLevel: "Humano+"
    }
    // ...adicione os demais heróis conforme necessário
];

// Rota API para heróis
app.get('/api/heroes', (req, res) => {
    res.json(heroes);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});