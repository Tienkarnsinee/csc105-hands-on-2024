import { Hono } from "hono";
import * as userController from "../controllers/user.controllers.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getUser);

export { userRouter };