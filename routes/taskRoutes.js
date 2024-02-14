const express = require("express");
const taskRoutesController = require("../controller/taskRoutesController");
const { isAuthenticated } = require("../middleware/authMiddleware");


const router = express.Router();

router.get('/task',isAuthenticated, taskRoutesController.task_get);
router.post('/task', taskRoutesController.task_post);

module.exports = router;