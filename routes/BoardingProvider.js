const express = require("express");
const boardingProviderController = require('../controllers/BoardingProvider.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const router = express.Router();

router.post('/signup',boardingProviderController.signUp);
router.post('/login',boardingProviderController.login);
router.get("/",checkAuthMiddleware.checkAuth,boardingProviderController.showProviders);

module.exports = router;

