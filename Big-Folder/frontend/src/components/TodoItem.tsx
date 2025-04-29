import { useState } from 'react';
import { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  updateTodo: (id: number, newName: string) => void;
  toggleSuccess: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({ todo, updateTodo, toggleSuccess, deleteTodo }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todo.name);

  const handleSave = () => {
    updateTodo(todo.id, editName);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between border p-3 rounded-lg bg-gray-50 hover:shadow-md transition">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.success}
          onChange={() => toggleSuccess(todo.id)}
          className="w-5 h-5 accent-indigo-500"
        />
        {isEditing ? (
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="border-b border-indigo-300 p-1 focus:outline-none"
          />
        ) : (
          <span className={`text-lg ${todo.success ? 'line-through text-gray-400' : ''}`}>
            {todo.name}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-600 font-medium"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-600 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;