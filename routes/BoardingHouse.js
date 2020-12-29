const express = require("express");
const boardingController = require('../controllers/BoardingHouse.controller')
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();


router.post("/register",checkAuthMiddleware.checkAuth,boardingController.boardingRegister);
router.get("/",boardingController.boardingShow);

// router.get("/", postsController.index);

module.exports= router;
