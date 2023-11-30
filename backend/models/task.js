let mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type : String,
  },
  isCompleted:  {
    type : Boolean,
    default: false,
  },
  isActive:{
    type: Boolean,
    default: false
  }

});

module.exports = mongoose.model("Task",taskSchema);
