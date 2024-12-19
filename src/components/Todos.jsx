import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos); // Ensure correct state path
    const dispatch = useDispatch();

    return (
        <div className="mt-8 w-full max-w-lg mx-auto">
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <span className="text-gray-800 text-lg">{todo.text}</span>
                        <button 
                            onClick={() => dispatch(removeTodo(todo.id))} 
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-md font-semibold hover:from-purple-600 hover:to-indigo-600 shadow-md duration-200"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
