const express = require('express');

const app = express();

app.set('port', 8080);

app.use(express.static('public/'));
app.use(express.static('client/dist'));

module.exports = app;
