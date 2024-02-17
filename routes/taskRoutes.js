const express = require("express");
const taskRoutesController = require("../controller/taskRoutesController");
const { isAuthenticated } = require("../middleware/authMiddleware");


const router = express.Router();

router.get('/task',isAuthenticated, taskRoutesController.task_get);
router.post('/task',isAuthenticated, taskRoutesController.task_post);
router.delete('/task',isAuthenticated, taskRoutesController.task_delete);
router.put('/task', isAuthenticated, taskRoutesController.task_put );

module.exports = router;