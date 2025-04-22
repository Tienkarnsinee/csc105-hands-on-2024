import type { Context } from "hono";
import * as todoModel from "../models/todo.model.ts";

type createTodoBody = {
    title: string;
    userId: number;
};

const createTodo = async (c: Context) => {
    try {
        const body = await c.req.json<createTodoBody>();
        if (!body.title || !body.userId)
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: "Missing required fields",
                },
                400
            );
        const newTodo = await todoModel.createTodo(body.title, body.userId);
        return c.json({
            success: true,
            data: newTodo,
            msg: "Created new Todo!",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");
        if (param !== undefined && param !== null) {
            const data = await todoModel.getTodo(parseInt(param));
            return c.json(data, 200);
        }
        return c.json(
            {
                success: false,
                data: null,
                msg: "Missing required fields",
            },
            400
        );
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const updateTodo = async (c: Context) => {
    try {
        const param = c.req.query("id");

        const body = await c.req.json<Pick<createTodoBody, 'title'>>();
        if (!body.title || param === undefined || param === null)
            return c.json({
                msg: "Missing required fields"
            })

        const data = await todoModel.updateTodo(body.title, parseInt(param));
        return c.json({
            data: data
        })
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const getUser = async (c: Context) => {
    try {
        const param = c.req.query("id");

        const id = await c.req.json<Pick<createTodoBody, 'userId'>>();
        return c.json({
            id: id
        });
    }
    catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `${e}`,
            },
            500
        );
    }
}
const updateTodoComplete = async (c: Context) => {
    try {
        const id = parseInt(c.req.query("id") || "");
        if (!id) return c.json({ msg: "Missing id" }, 400);

        const updated = await todoModel.updateTodoComplete(id);
        return c.json({ success: true, data: updated });
    } catch (e) {
        return c.json({ success: false, msg: `${e}` }, 500);
    }
};
const updateTodoTitle = async (c: Context) => {
    try {
        const id = parseInt(c.req.query("id") || "");
        const { title } = await c.req.json();

        if (!id || !title) return c.json({ msg: "Missing fields" }, 400);

        const updated = await todoModel.updateTodo(title, id);
        return c.json({ success: true, data: updated });
    } catch (e) {
        return c.json({ success: false, msg: `${e}` }, 500);
    }
};
const getTodosByUserId = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        const todos = await todoModel.getTodosByUser(id);
        return c.json({ success: true, data: todos });
    } catch (e) {
        return c.json({ success: false, msg: `${e}` }, 500);
    }
};

export { createTodo, getTodo, updateTodo, getUser, updateTodoComplete, updateTodoTitle, getTodosByUserId };