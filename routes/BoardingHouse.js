const express = require("express");
const boardingController = require('../controllers/BoardingHouse.controller')
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();


router.post("/",checkAuthMiddleware.checkAuth,boardingController.boardingRegister);




module.exports= router;