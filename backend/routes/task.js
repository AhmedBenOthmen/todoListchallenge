const express = require('express');
const router= express.Router();
const taskController = require('../controllers/task.js')





router.post('/add', taskController.createTask)
router.get('/get', taskController.getAllTasks)
router.get('/get/:id', taskController.getOneTask)
router.put('/update/:id', taskController.updateTask)
router.delete('/delete/:id',taskController.deleteTask)




module.exports = router;