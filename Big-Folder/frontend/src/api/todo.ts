import { Axios } from '../lib/axiosInstance';

export const getTodos = async () => {
  try {
    const res = await Axios.get('/todos');
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false, data: [] };
  }
};

export const createTodo = async (name: string) => {
  try {
    const res = await Axios.post('/todos', { name });
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false, data: null };
  }
};

export const updateTodo = async (id: number, name: string, success: boolean) => {
  try {
    const res = await Axios.put(`/todos/${id}`, { name, success });
    return { success: true, data: res.data };
  } catch (error) {
    console.error(error);
    return { success: false, data: null };
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await Axios.delete(`/todos/${id}`);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
