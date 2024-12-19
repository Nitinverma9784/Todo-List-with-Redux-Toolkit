import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import Todos from './Todos';

function TodoForm() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addtodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={addtodoHandler}
                className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg"
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Todo List</h2>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Write your task..."
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-gray-800 focus:ring-2 focus:ring-purple-400 hover:bg-gray-100 outline-none"
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md font-semibold hover:from-purple-600 hover:to-indigo-600 shadow-md duration-200"
                >
                    Add Task
                </button>

                <Todos />
            </form>
        </div>
    );
}

export default TodoForm;
