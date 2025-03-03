'use client';
import { useState, useEffect } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from local storage
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
      {/* Task Input */}
      <div className='flex mb-4'>
        <input
          type='text'
          className='flex-1 p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400'
          placeholder='Add a new task...'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className='p-3 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition duration-200'
          onClick={() => {
            if (newTask.trim() === '') return;
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
          }}
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className='space-y-2'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-3 shadow rounded border ${
              task.completed
                ? 'bg-green-100 line-through text-gray-500'
                : 'bg-white'
            }`}
          >
            <span className='cursor-pointer' onClick={() => toggleTask(index)}>
              {task.text}
            </span>
            <button
              className='text-red-500 hover:text-red-700 transition'
              onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
