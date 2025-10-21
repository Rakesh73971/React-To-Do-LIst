import { useState } from "react";


function AddTodo({onNewItem}){
    const [newTodoName,setTodoName] = useState()
    const [newDueDate,setDueDate] = useState()

    const handleNamechange = (event) =>{
        setTodoName(event.target.value)

    }

    const handleDueDate = (event) =>{
        setDueDate(event.target.value)
    }

    const handleAddButton = () =>{
        onNewItem(newTodoName,newDueDate)
        setTodoName('')
        setDueDate('')
    }

    return (
        <div className='container'>
            <div className='row kg-row'>
                <div className='col-6'>
                    <input type='text' placeholder="Enter task here" onChange={handleNamechange} value={ newTodoName }/>
                </div>
                <div className='col-4'>
                    <input type='date' onChange={handleDueDate} value={newDueDate} />
                </div>
                <div className='col-2'>
                    <button className='btn btn-success px-4'  onClick={handleAddButton}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AddTodo;