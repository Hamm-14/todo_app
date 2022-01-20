const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    desc : {
        type: String,
        required: true
    },
    date : {
        type : Date,
        required: true
    },
    cate : {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;