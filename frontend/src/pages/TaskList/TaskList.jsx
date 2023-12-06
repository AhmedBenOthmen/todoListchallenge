import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Task from '../../components/Task/Task.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './TaskList.css'
import useTask from './useTask.js';


const TaskList = () => {
    const { gettALlTasks, addTask, deletedTask, getOneTask, updatedTask,
        isLoading, tasks, error, taskSelected, handleShow, show, handleClose, setNewTask, newTask } = useTask()

    

    if (isLoading && !tasks && !error) return <Spinner animation="border" />; // temps d'attente 
    if (!isLoading && !tasks && error) <Alert variant="danger" > <Alert.Heading> {error}</Alert.Heading> </Alert> // cas d'erreur
    if (tasks) return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                ADD
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD NEW TASK </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ margin: "5px" }}>
                        <label> Name  :  </label>
                        <input type="text" onChange={(e) => setNewTask({ ...newTask, name: e.target.value })} />
                    </div>
                    <br />
                    <div style={{ margin: "5px" }}>
                        <label> Description :  </label>
                        <input type="text" onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addTask}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className='tasks'>
                {tasks.map((elt, index) => <Task
                    data={elt} index={index}
                    getOneTask={getOneTask} taskSelected={taskSelected}
                    deletedTask={deletedTask}
                    updatedTask={updatedTask}
                />)}
            </div>

        </div>
    )
}

export default TaskList