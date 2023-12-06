import { useEffect, useState } from "react";
import api from '../../Services/api.js';

const useOneTask =(data)=>{
 

    const [taskUpdated, setTaskUpdated]=useState({
        name:data.name,
        description:data.description
       })
        const [show, setShow] = useState(false)
        const [showUpdate, setShowUpdate] = useState(false)
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const handleCloseModal = () => setShowUpdate(false);
        const handleShowModal = () =>  {
      
          setShowUpdate(true);
        }
      

    return {taskUpdated,setTaskUpdated,show,setShow,showUpdate,setShowUpdate,handleClose,handleShow,
    handleCloseModal,handleShowModal}
}

export default useOneTask