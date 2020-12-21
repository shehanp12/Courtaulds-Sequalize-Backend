const express = require("express");
const employeeController = require('../controllers/Employee.controller')

const router = express.Router();


router.post('/signup',employeeController.signUp);
router.post('/login',employeeController.login);


module.exports= router;


