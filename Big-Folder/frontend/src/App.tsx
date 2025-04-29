import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { getTodos, createTodo, updateTodo as apiUpdateTodo, deleteTodo as apiDeleteTodo } from './api/todo';

export type Todo = {
  id: number;
  name: string;
  success: boolean;
  createdAt: string; 
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const result = await getTodos();
    if (result.success) {
      setTodos(result.data);
    }
  };

  const addTodo = async (name: string) => {
    const result = await createTodo(name);
    if (result.success) {
      fetchTodos();
    }
  };

  const updateTodo = async (id: number, newName: string) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    const result = await apiUpdateTodo(id, newName, todo.success);
    if (result.success) {
      fetchTodos();
    }
  };

  const toggleSuccess = async (id: number) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    const result = await apiUpdateTodo(id, todo.name, !todo.success);
    if (result.success) {
      fetchTodos();
    }
  };

  const deleteTodo = async (id: number) => {
    const result = await apiDeleteTodo(id);
    if (result.success) {
      fetchTodos();
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">📝 My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <div className="mt-6 space-y-4">
          {todos.length === 0 ? (
            <p className="text-gray-400 text-center">No todos yet. Add one!</p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                updateTodo={updateTodo}
                toggleSuccess={toggleSuccess}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;