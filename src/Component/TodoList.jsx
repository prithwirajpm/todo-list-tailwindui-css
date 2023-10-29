import React, { useState } from 'react';
import '../Component/TodoList.css'

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            if (editIndex !== -1) {
                // If editing an existing task, update it
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = newTask;
                setTasks(updatedTasks);
                setEditIndex(-1); // Reset edit mode
            } else {
                // If not editing, add a new task
                setTasks([...tasks, newTask]);
            }
            setNewTask('');
        }
    };

    const handleEditTask = (index) => {
        // Enable editing for the selected task
        setEditIndex(index);
        setNewTask(tasks[index]);
    };

    const handleRemoveTask = (index) => {
        // Remove a task from the list
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        setEditIndex(-1); // Reset edit mode
    };

    return (
        <div className='bgrdClor h-screen pt-5'>
            <div className="max-w-md mx-auto  p-4 bg-white  rounded shadow-md">
                {/* <h1 className="text-3xl font-semibold mb-4">Todo List</h1> */}
                <div className='flex justify-center'><img src="https://cdn-icons-png.flaticon.com/512/6619/6619606.png"  style={{height:'150px'}} alt="" srcset="" /></div>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Add a new task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="flex-grow p-2 rounded-l border"
                    />
                    <button onClick={handleAddTask} className="bg-blue-500 text-white p-2 rounded-r">
                        {editIndex !== -1 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                            </svg>
                        }
                    </button>
                </div>
                <ul className="mt-4">
                    {tasks.map((task, index) => (
                        <li key={index} className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded">
                            {editIndex === index ? (
                                <input
                                    type="text"
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    className="flex-grow p-2 border rounded-l"
                                />
                            ) : (
                                task
                            )}
                            {editIndex === index ? (
                                <button
                                    onClick={() => handleAddTask(index)}
                                    className="bg-blue-500 text-white p-2 rounded-r"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
    
    
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEditTask(index)}
                                    className="bg-yellow-500 text-white p-2 rounded-r"
    
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
    
                                </button>
                            )}
                            <button
                                onClick={() => handleRemoveTask(index)}
                                className="bg-red-500 text-white p-2 rounded"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
    
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
