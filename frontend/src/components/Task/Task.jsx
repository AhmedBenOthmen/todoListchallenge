import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useOneTask from './useOneTask.js'

const Task = ({ data, index, getOneTask, taskSelected, deletedTask, updatedTask}) => {

    const {taskUpdated,setTaskUpdated,show,setShow,showUpdate,setShowUpdate,handleClose,handleShow,
      handleCloseModal,handleShowModal} = useOneTask(data)
  return (
    <div>
      <Form>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>  {data.name}</Card.Title>
            <Card.Text>
              {
                data.description
              }
            </Card.Text>

            <div key={index} className="mb-3">


              <Card.Text>
                {
                  data.isCompleted ? "DONE" : "NOT DONE"
                }
              </Card.Text>

            </div>
          </Card.Body>
          <Card.Footer>


            <Button variant="Danger" onClick={() => deletedTask(data._id)}>Delete</Button>{' '}
            <Button variant="light" onClick= {() => handleShowModal()}>Update</Button>{' '}
            <Button variant="primary" onClick={() => { getOneTask(data._id); handleShow() }}>
              View
            </Button>
            {/* modal for getone Task */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>View  TASK </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ margin: "5px" }}>
                  <label> {taskSelected?.name}  </label>
                </div>
                <br />
                <div style={{ margin: "5px" }}>
                  <label>   {taskSelected?.description} </label>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            {/* modal for update task  */}

            <Modal show={showUpdate} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Update this  TASK </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ margin: "5px" }}>
                  <label> Name  :  </label>
                  <input type="text" placeholder={taskUpdated?.name}  onChange={(e) => setTaskUpdated({ ...taskUpdated, name: e.target.value })} />
                </div>
                <br />
                <div style={{ margin: "5px" }}>
                  <label> Description :  </label>
                  <input type="text" placeholder={taskUpdated?.description} onChange={(e) => setTaskUpdated({ ...taskUpdated, description: e.target.value })} />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => { updatedTask(data._id, taskUpdated); handleCloseModal() }}>
                  update
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Footer>
        </Card>
      </Form>

    </div>
  )
}

export default Task