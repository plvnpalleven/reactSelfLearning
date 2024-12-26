import React, { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);
  //edit modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

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

  //edit

  const handleEditTask = (index) => {
    setCurrentTaskIndex(index);
    setEditedTask(taskList[index]);
    setIsModalOpen(true);
  };

  const handleSaveTask = () => {
    const updatedTasks = [...taskList];
    updatedTasks[currentTaskIndex] = editedTask;
    setTaskList(updatedTasks);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="todo-container">
      <h1 className="header">Task Manager</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new task..."
          onChange={handleInputChange}
          value={taskInput}
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-button">
          Add
        </button>
      </div>
      {taskList.length >0 && (
      <div className="app">
        <ul className="task-list">
          {taskList.map((task, index) => (
            <li key={index} className="task-item">
              {task}
              <div className="button-container">
                <button
                  onClick={() => handleEditTask(index)}
                  className="edit-button"
                >
                  Edit
                </button>
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
      )}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Task</h3>
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              className="modal-input"
            />
            <div className="modal-buttons">
              <button onClick={handleSaveTask} className="save-button">
                Save
              </button>
              <button onClick={handleCloseModal} className="close-button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
