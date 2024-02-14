const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
     
    },
    taskName: {
        type: String,
        required: true
    }

  });




const Task = mongoose.model('Task', taskSchema);


module.exports = Task ;