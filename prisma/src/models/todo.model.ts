import { db } from "../index.ts";

const createTodo = async (title: string, userId: number) => {
    const todo = await db.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
const getTodo = async (id: number) => {
    const todo = await db.todo.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true,
        },
    });
    return todo;
}
const updateTodo = async (title: string, id: number) => {
    const todo = await db.todo.update({
        where: {
            id: id,
        },
        data: {
            title: title,
        },
    });
    return todo;
}
export const getUser = async (id: number) => {
    const todo = await db.todo.findMany({
        where: {
            userId: id
        }
    })
    return todo;
}
const updateTodoComplete = async (id: number) => {
    return await db.todo.update({
        where: { id },
        data: { completed: true },
    });
};
const getTodosByUser = async (userId: number) => {
    return await db.todo.findMany({
        where: { userId },
    });
};

export { createTodo, getTodo, updateTodo, updateTodoComplete, getTodosByUser };