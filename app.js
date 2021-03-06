const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const employeeRoute = require('./routes/Employee');
const imageRoute = require('./routes/images');
const boardingHouse = require('./routes/BoardingHouse')
const boardingProvider = require('./routes/BoardingProvider');

app.use("/employee",employeeRoute);
app.use("/images", imageRoute);
app.use("/boardingHouse",boardingHouse);
app.use('/uploads', express.static('uploads'));
app.use('/boardingProvider',boardingProvider);



app.get('/',((req, res) =>{
    res.send('Hello World');
} ))

module.exports= app;

