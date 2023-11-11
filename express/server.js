const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('coba express');
});

app.get('/wikrama', (req, res) => {
    res.send('Hallo Wikrama!');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
