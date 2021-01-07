const express = require("express");
const boardingController = require('../controllers/BoardingProvider.controller');

const router = express.Router();

router.post('/signup',boardingController.signUp);
router.post('/login',boardingController.login);
router.get("/",)

module.exports = router;

