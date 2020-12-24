const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const employeeRoute = require('./routes/Employee');
const imageRoute = require('./routes/images');
const boardingHouse = require('./routes/BoardingHouse')

app.use("/employee",employeeRoute);
app.use("/images", imageRoute);
app.use("/boardingHouse",boardingHouse);
app.use('/uploads', express.static('uploads'));



app.get('/',((req, res) =>{
    res.send('Hello World');
} ))

module.exports= app;

