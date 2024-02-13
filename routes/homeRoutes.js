const express = require("express");
const homeRouteController = require('../controller/homeRoutesController');

const router = express.Router();

router.get("/", homeRouteController.homePageLoad);

module.exports = router;