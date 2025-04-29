import { useState } from 'react';

interface TodoFormProps {
  addTodo: (name: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addTodo(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;