import { useEffect, useState } from "react";
import api from '../../Services/api.js';

const useTask =()=>{
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [newTask , setNewTask]= useState({
        name:"",
        description:""
    })
    const [taskSelected, setTaskSelected]=useState()


        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);



    const gettALlTasks = async ()=> {
        try {
            setIsLoading(true)
            const response = await api.get('/task/get')
            setTasks(response.data.payload)
        } catch (error) {
            setError('Error fetching Tasks')
            console.log('Error about getAllTasks', error)
        }finally{
            setIsLoading(false)
        }
    }

    const addTask = async()=>{
        try {
            setIsLoading(true)
            const response = await api.post('/task/add',newTask);
            await gettALlTasks()
            // setTasks([...tasks, response.data.payload]);
            handleClose()

        } catch (error) {
            setError('Error ADD Task')
            console.log('Error about addTask', error)
        }finally{
            setIsLoading(false)
        }
    }

    const getOneTask = async(id)=>{
        try {
            setIsLoading(true)
            const response = await api.get(`/task/get/${id}`);
            setTaskSelected(response.data.payload)
        } catch (error) {
            setError('Error get Task')
            console.log('Error about getOneTask', error)
        }finally{
            setIsLoading(false)
        }
    }

    const deletedTask = async (id)=> {
        try {
            setIsLoading(true)
            const response = await api.patch(`/task/delete/${id}`);
            await gettALlTasks()
        } catch (error) {
            setError("Error delete Task")
            console.log('Error about deletedTask', error)
        }finally{
            setIsLoading(false)
        }
    }
    
    const updatedTask = async (id, taskSelected) =>{
        try {
            setIsLoading(true)
            const response = await api.put(`/task/update/${id}`,taskSelected);
            await gettALlTasks()
        } catch (error) {
            setError('Error updatedTask')
            console.log('Error about updatedTask', error)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
       gettALlTasks();
    },[])

    return {gettALlTasks, addTask, deletedTask, getOneTask, updatedTask, 
        isLoading, tasks, error, taskSelected, handleShow, show , handleClose, setNewTask, newTask}
}

export default useTask