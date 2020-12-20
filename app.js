const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/',((req, res) =>{
    res.send('Hello World');
} ))

module.exports= app;

