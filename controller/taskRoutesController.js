const Task = require("../models/Task");
const { getAllTasks, getUserName } = require("../middleware/userTasks");
const secret = process.env.SECRET;
const jwt = require('jsonwebtoken');


const loggedInUserID = async function(req) {
    const token =  req.cookies.jwt;
    console.log(token);
    try {
        const decodedToken = jwt.verify(token, secret);
        const tokenUserId = decodedToken.id;
        console.log("token: "+tokenUserId);
        return tokenUserId;
    } catch (err) {
       // console.log(err.message);
        return [];
    }
};

const task_get = async function(req, res) {
    const IDofUser = await loggedInUserID(req);
    console.log("dd:"+IDofUser);
    try {

        
        const tasks = await getAllTasks(IDofUser);
        const userName = await getUserName(IDofUser);
        //console.log(tasks);
        res.render('task', {tasks:tasks, showUser: userName});
    } catch (error) {
        // Handle error appropriately
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
const task_post = async function(req,res){
     const userID = await loggedInUserID(req);
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

module.exports = {
    task_get,
    task_post,
}