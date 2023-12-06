const mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
    },
    description: {
        type:String,
    },
    isCompleted :{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }

})

module.exports = mongoose.model("Task", taskSchema);