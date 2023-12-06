const Task = require('../models/task.js')

exports.createTask = async (req,res)=>{
    const { name, description} = req.body ;
    try {
       const newTask = new Task(req.body)
       const isExisting = await Task.findOne({name:req.body.name, isActive:true})
       if (isExisting ) {
        return res.status(200).json({
            payload :" Task already exists"
        })
       }
       await newTask.save();
       return res.status(201).json({
        payload:"Task Created"
       })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            payload:"Error adding a task"
        })
    }
}

exports.getAllTasks = async(req,res)=>{
    try {
        const tasks = await Task.find({isActive:true});
        let data

        if (tasks && !tasks.length) {
            data = "No Data Found";
        }else {
            data = tasks
        }
        return res.status(200).json({
            payload: data
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error IN getAllTask"
        })
    }
}

exports.getOneTask = async(req,res)=>{
try {
    const task = await Task.findOne({_id:req.params.id , isActive:true})
    let data
    if (task) {
        data = task
    }else {
        data = "No Data Found"
    }

    return res.status(200).json({
        payload:data
    })
} catch (error) {
    console.log(error)
    res.status(500).json({
        message:"Error IN getOneTask"
    })
}
}

exports.updateTask =async(req,res)=>{
    try {
        const isExisting = await Task.findOne({ name: req.body.name, isActive: true })
        if (isExisting) {
            return res.status(200).json({
                payload: " can't updated this task because it is  already existing"
            })
        }
        const task = await Task.findOneAndUpdate({ _id: req.params.id, isActive: true }, req.body, { new: true })
        let data
        if (task) {
            data = task
        } else {
            data = "No Data Found"
        }

        return res.status(200).json({
            payload: data
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error IN updateTask"
        })
    }
}

exports.deleteTask = async (req,res)=>{
    try {
        const task = await Task.findOneAndUpdate({ _id: req.params.id }, { isActive: false })
        let data
        if (task) {
            data = "Task is Deleted"
        } else {
            data = "No Data Found"
        }

        return res.status(200).json({
            payload: data
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error IN DeleteTask"
        })
    }
}