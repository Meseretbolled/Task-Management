import React, { useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Read a book', completed: true }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newEntry = {
      id: Date.now(),
      title: newTask,
      completed: false
    };
    setTasks([...tasks, newEntry]);
    setNewTask('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Task Manager</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow px-3 py-2 border rounded-l-lg outline-none"
            placeholder="Enter new task"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul>
          {tasks.map(task => (
            <li key={task.id} className="flex justify-between items-center mb-2">
              <span
                className={`flex-1 ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.title}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className={`px-2 py-1 text-sm rounded ${
                    task.completed ? 'bg-yellow-400' : 'bg-green-500'
                  } text-white`}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white px-2 py-1 text-sm rounded"
                >
                  Delete
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
