import React, { useState } from 'react';
// import './index.css'; // or import './index.css';


const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            className="border rounded-l px-2 py-1 w-full"
            placeholder="Enter a task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button onClick={addTask} className="bg-blue-500 text-white px-3 py-1 rounded-r hover:bg-blue-600 focus:outline-none">
            Add
          </button>
        </div>
      </div>
      <ul className="divide-y divide-gray-300">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            <span className="text-lg">{task}</span>
            <button onClick={() => deleteTask(index)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
