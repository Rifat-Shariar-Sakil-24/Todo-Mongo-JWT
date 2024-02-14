const Task = require("../models/Task");
const { getAllTasks } = require("../middleware/userTasks");

const task_get = async function(req, res) {
    try {
        const tasks = await getAllTasks(req);
        console.log(tasks);
        res.render('task', {tasks:tasks});
    } catch (error) {
        // Handle error appropriately
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
const task_post = async function(req,res){
    
    try{
        const task = new Task({
            userID: req.body.userID,
            taskName: req.body.taskName
        })
        await task.save();
        res.status(201).json(task._id);
    }
    catch (error){
         res.status(401).send(error.message);
    }
}

module.exports = {
    task_get,
    task_post,
}