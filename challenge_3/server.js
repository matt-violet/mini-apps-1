// Use MongoDB or MySQL to store your user data
// Build your Express app inside server.js

const express = require('express');
const app = express();
const port = 3000;

//app.get('/', (req, res) => res.send('GET request to the homepage'));

//app.post('/', (req, res) => res.send('POST request to the homepage'));

// serve index.html and associated files
app.use('/', express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

