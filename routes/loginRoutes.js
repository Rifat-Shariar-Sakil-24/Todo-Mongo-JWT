const express = require('express');
const router = express.Router();
const loginRouteController = require('../controller/loginRoutesController');

router.get("/login",loginRouteController.login_get);
router.post("/login",loginRouteController.login_post);

module.exports = router;