const express = require('express');
const app = express();
// const ejs = require('ejs');

require('dotenv').config({'path':'./config/.env'});

app.set('view engine', 'ejs');
app.set(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(8000, (err) => {
    console.log('Server listening on port 8000');
})