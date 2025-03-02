'use client'; // Required for interactive components

import { useState, useEffect } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(''); // Holds input value

  // Load tasks when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='max-w-md mx-auto mt-10 p-4 bg-gray-800 shadow-lg rounded-lg'>
      <h1 className='text-2xl font-bold text-center mb-4'>To-Do List</h1>

      {/* Task Input */}
      <div className='flex mb-4'>
        <input
          type='text'
          className='flex-1 p-2 border rounded-l'
          placeholder='Add a new task...'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className='p-2 bg-teal-900 text-white rounded-r hover:bg-teal-600 cursor-pointer'
          onClick={() => {
            if (newTask.trim() === '') {
              return;
            } // Ignore empty input
            setTasks([...tasks, newTask]); // Add new task
            setNewTask(''); // Clear input
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
            className='flex justify-between p-2 bg-teal-600 rounded'
          >
            <input
              type='text'
              className='text-l font-semibold text-black bg-transparent outline-none'
              value={task}
              onChange={(e) => {
                const newTasks = [...tasks];
                newTasks[index] = e.target.value;
                setTasks(newTasks);
              }}
            />
            <button
              className='text-black cursor-pointer'
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
