const express = require("express");
const boardingHouseController = require('../controllers/BoardingHouse.controller')
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();


router.post("/register",checkAuthMiddleware.checkAuth,boardingHouseController.boardingRegister);
router.get("/",boardingHouseController.boardingShow);
router.get("/:userId",boardingHouseController.show);


// router.post("/register",boardingHouseController.boardingRegister);

// router.get("/", postsController.index);

module.exports= router;
