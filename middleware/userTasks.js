const jwt = require('jsonwebtoken');
const Task = require('../models/Task');
const User = require('../models/User');
const secret = process.env.SECRET;

// const getAllTasks = async function(req) {
//     const token = req.cookies.jwt;

//     try {
//         const decodedToken = jwt.verify(token, secret);
//         const tokenUserId = decodedToken.id;
//         const tasks = await Task.find({ userID: tokenUserId }).exec();
//         return tasks;
//     } catch (err) {
//        // console.log(err.message);
//         return [];
//     }
// };

// const getUserName = async function (req){
//     const token = req.cookies.jwt;

//     try {
//         const decodedToken = jwt.verify(token, secret);
//         const tokenUserId = decodedToken.id;
//         const user = await User.findOne({ _id: tokenUserId }).exec();
//         return user.email;
//     } catch (err) {
//         //console.log(err.message);
//         return [];
//     }
// }
// const getUserID = async function (req){
//     const token = req.cookies.jwt;

//     try {
//         const decodedToken = jwt.verify(token, secret);
//         const tokenUserId = decodedToken.id;
        
//         return tokenUserId;
//     } catch (err) {
//        // console.log(err.message);
//         return [];
//     }
// }

const getAllTasks = async function(id) {
   
        const tasks = await Task.find({ userID: id }).exec();
        return tasks;
  
};

const getUserName = async function (id){
   
        const user = await User.findOne({ _id: id }).exec();
       // console.log(id);
        return user.email;
}





module.exports = {
    getAllTasks,
    getUserName,

}