'use client';

import { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([
    'Buy milk',
    'Read a book',
    'Write some code',
  ]);
  const [newTask, setNewTask] = useState(''); // holding input value
  return (
    <div className='max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg'>
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
          className='p-2 bg-indigo-500 text-white rounded-r'
          onClick={() => {}}
        >
          Add
        </button>
      </div>
      {/* Task List */}
      {/* Task List */}
      <ul className='space-y-2'>
        {tasks.map((task, index) => (
          <li
            key={index}
            className='flex justify-between p-2 bg-teal-500 rounded'
          >
            {task}
            <button
              className='text-stone-900'
              onClick={() => {
                console.log('clicked');
              }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
