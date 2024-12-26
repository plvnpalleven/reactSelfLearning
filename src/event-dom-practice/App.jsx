import React , {useState} from 'react';

function App(){
    const [taskInput,setTaskInput] = useState("");
    const [taskList,setTaskList] = useState([]);

    const handleInputChange = (event) => setTaskInput(event.target.value);
    const handleAddTask = () => {
        if(taskInput.trim() !== ""){
            setTaskList([...taskList,taskInput]);//add task to array
            setTaskInput("");//clear input
        }else if(taskInput.trim() === ""){
            alert("Enter your task!");
            return;
        }
        
    };

    const handleDeleteTask =(indexToDelete) => {
        setTaskList(taskList.filter((_,index)=> index !== indexToDelete));
    };
    return(
        <div>
            <input type="text" placeholder="Add new task..." onChange={handleInputChange} value={taskInput}/>
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {taskList.map((task, index)=>(
                    <li key ={index}>{task}<button onClick={()=>handleDeleteTask(index)}>delete</button></li> // display as li
                ))}
            </ul>
           
        </div>
    )
}

export default App;