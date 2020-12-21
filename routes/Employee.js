const express = require("express");
const employeeController = require('../controllers/Employee.controller')

const router = express.Router();


router.post('/signup',employeeController.signUp);


module.exports= router;


