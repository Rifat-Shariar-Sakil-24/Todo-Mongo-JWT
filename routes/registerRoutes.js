const express = require('express');
const router = express.Router();
const registerRouteController = require('../controller/registerRoutesController');


router.get("/register", registerRouteController.register_get);
router.post("/register",registerRouteController.register_post);

module.exports = router;