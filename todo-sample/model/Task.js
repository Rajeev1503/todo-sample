const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    periodType: {
        type:String,
        // required:true
    },
    dueDate: {
        type:String,
        // required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    taskListName: {
        type: mongoose.Types.ObjectId,
        ref: 'taskList'
    }
})

const Task = mongoose.model('taskSchema', taskSchema);

module.exports = Task;