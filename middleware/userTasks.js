const jwt = require('jsonwebtoken');
const Task = require('../models/Task');
const secret = process.env.SECRET;

const getAllTasks = async function(req) {
    const token = req.cookies.jwt;

    try {
        const decodedToken = jwt.verify(token, secret);
        const tokenUserId = decodedToken.id;
        const tasks = await Task.find({ userID: tokenUserId }).exec();
        return tasks;
    } catch (err) {
        console.log(err.message);
        return [];
    }
};

module.exports = {
    getAllTasks
}