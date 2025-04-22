import { db } from "../index.ts";
export { isDuplicate, createUser, getUser, updateUserName };

const isDuplicate = async (firstName: string, lastName: string) => {
    const user = await db.user.findFirst({
        where: {
            firstName,
            lastName,
        },
    });
    return user;
};
const createUser = async (firstName: string, lastName: string) => {
    const user = await db.user.create({
        data: {
            firstName,
            lastName,
        },
    });
    return user;
};
const getUser = async () => {
    const user = await db.user.findMany({});
    return user;
};
const updateUserName = async (
    id: number,
    firstName: string,
    lastName: string  
) => {
    const user = await db.user.update({
        where: { id },
        data: {
            firstName,
            lastName,
        },
    });
    return user;
};