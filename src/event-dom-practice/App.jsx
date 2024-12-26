import React, { useState } from "react";

function App() {
    const [taskInput, setTaskInput] = useState("");
    const [taskList, setTaskList] = useState([]);
    

    const handleInputChange = (event) => setTaskInput(event.target.value);

    const handleAddTask = () => {
        if (taskInput.trim() !== "") {
            setTaskList([...taskList, taskInput]); // add task to array
            setTaskInput(""); // clear input
        } else if (taskInput.trim() === "") {
            alert("Enter your task!");
            return;
        }
    };

    const handleDeleteTask = (indexToDelete) => {
        setTaskList(taskList.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
            <h1 className="header">Task Manager</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add new task..."
                    onChange={handleInputChange}
                    value={taskInput}
                    className="task-input"
                />
                <button onClick={handleAddTask} className="add-button">Add</button>
            </div>
            
        <div className="app">
            
           
            <ul className="task-list">
                {taskList.map((task, index) => (
                    <li key={index} className="task-item">
                        {task}
                        <div className="button-container">
                        <button className="edit-button">Edit</button>
                        <button
                            onClick={() => handleDeleteTask(index)}
                            className="delete-button"
                        >
                            X
                        </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}

export default App;
