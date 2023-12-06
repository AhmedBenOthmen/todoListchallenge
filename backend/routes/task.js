const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/task.js")

router.post('/add', taskControllers.createTask )
router.get('/get', taskControllers.getAllTasks )
router.get('/get/:id', taskControllers.getOneTask )
router.put('/update/:id', taskControllers.updateTask )
router.patch('/delete/:id', taskControllers.deleteTask )

module.exports = router