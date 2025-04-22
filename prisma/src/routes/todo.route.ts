import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";
import * as userController from "../controllers/user.controllers.ts";

const todoRouter = new Hono();
todoRouter.post("/todo", todoController.createTodo);
todoRouter.get("/todo", todoController.getTodo);
todoRouter.patch("/todo/title", todoController.updateTodoTitle);
todoRouter.patch("/todo/complete", todoController.updateTodoComplete);
todoRouter.get("/todo/user/:id", todoController.getTodosByUserId);
todoRouter.get("/users", userController.getUser);
todoRouter.patch("/user/:id", userController.updateUserName);

export { todoRouter };
