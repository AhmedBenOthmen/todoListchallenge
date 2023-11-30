const Task = require("../models/task.js");

exports.createTask = async (req, res) => {
  // const {name, description}= req.body;
  try {
    const newTask = await Task.create(req.body);
    const isExisting = await Task.findOne({name:req.body.name, isActive:true})
    if (isExisting && isExisting.isActive === true){
        return res.status(200).json({
            payload : "TASK ALREADY EXISTING"
        })
    }
    await newTask.save();
    res.status(201).json({
      payload: "task created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      payload: "ERROR ADDING A TASK",
    });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({isActive:true});
    let data;
    if (tasks && !tasks.lenght) {
      data = "no data found";
    } else {
      data = tasks;
    }

    return res.status(200).json({
      payload: tasks,
    });
  } catch (error) {
    res.status(500).json({
      payload: "error getAllTasks",
    });
  }
};



exports.getOneTask = async (req,res)=>{
    try {
        const task = await Task.findOne({_id:req.params.id, isActive:true})
        let data
        if(task){
            data = task
        }else {
            data = "NO DATA FOUND"
        }
        res.status(200).json({
            payload:data
        })
    } catch (error) {
        res.status(500).json({
            payload: "error getOneTask",
          });
    }
}



exports.updateTask = async (req,res)=>{
    try {
        const isExisting = await Task.findOne({name:req.body.name, isActive:true})
        if (isExisting && isExisting.isActive === true){
            return res.status(200).json({
                payload : "CANT UPDATE NAME ALREADY EXISTING"
            })
        }
        const task = await Task.findOneAndUpdate({_id:req.params.id,isActive:true},req.body,{new:true})
        let data
        if(task){
            data = task
        }else {
            data = "NO DATA FOUND"
        }
        res.status(200).json({
            payload:data
        })

    } catch (error) {
        res.status(500).json({
            payload: "error updateTask",
          });
    }
}


exports.deleteTask = async (req,res)=>{
    try {
        const task = await Task.findOneAndUpdate({_id:req.params.id},{isActive:false})
        let data
        if(task){
            data = "Task is deleted"
        }else {
            data = "no data found"
        }
        return res.status(200).json({
            payload : data
        })
    } catch (error) {
        res.status(500).json({
            payload: "error deleteTask",
          });
    }
}