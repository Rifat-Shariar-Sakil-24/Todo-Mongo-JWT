const Task = require("../models/Task");
const { getAllTasks, getUserName, getUserID } = require("../middleware/userTasks");




const task_get = async function(req, res) {
    try {
        const tasks = await getAllTasks(req);
        const userName = await getUserName(req);
        //console.log(tasks);
        res.render('task', {tasks:tasks, showUser: userName});
    } catch (error) {
        // Handle error appropriately
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
const task_post = async function(req,res){
     const userID = await getUserID(req);
     const taskName = req.body.taskName;

    
    try{
        const task = new Task({
            userID: userID,
            taskName: taskName
        })
        await task.save();
        res.status(201).json(task._id);
    }
    catch (error){
         res.status(401).send(error.message);
    }
}

const task_delete = function(req,res){
    const taskToDeleteID = req.body.taskToDelete;
    try{
        Del();
        async function Del(){
            await Task.findByIdAndDelete(taskToDeleteID).exec()
        }
        res.status(201).send("deleted");
    }
    catch (error){
         res.status(401).send(error.message);
    }
   
    
}

module.exports = {
    task_get,
    task_post,
    task_delete
}