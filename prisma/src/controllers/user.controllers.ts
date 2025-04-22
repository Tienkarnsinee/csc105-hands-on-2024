import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};

const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json({
				success: false,
				data: null,
				msg: "Missing required fields",
			}, 400);

		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "firstName or lastName is duplicated",
			});
		}

		const newUser = await userModel.createUser(body.firstName, body.lastName);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		}, 500);
	}
};
const getUser = async (c: Context) => {
	try {
		const allUsers = await userModel.getUser();
		return c.json({
			success: true,
			data: allUsers,
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		}, 500);
	}
};
const updateUserName = async (c: Context) => {
	try {
		const id = parseInt(c.req.param("id"));
		const { firstName, lastName } = await c.req.json();

		if (!firstName || !lastName)
			return c.json({ msg: "Missing fields" }, 400);

		const updatedUser = await userModel.updateUserName(id, firstName, lastName);
		return c.json({
			success: true,
			data: updatedUser,
			msg: "Updated user name successfully!",
		});
	} catch (e) {
		return c.json({
			success: false,
			data: null,
			msg: `${e}`,
		}, 500);
	}
};

export { createUser, getUser, updateUserName };