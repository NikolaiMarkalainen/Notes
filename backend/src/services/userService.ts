
import { User } from "../models/index";
import { NewUserEntry, SearchRequest, UserAttributes, UserSearchParams } from "../types";

const getUsers = async  (req: SearchRequest ): Promise <UserAttributes[]> => {
    const where: UserSearchParams= req.where || {};
    const users = await User.findAll({where});
    return users;
};

const findById = async (id: number): Promise<UserAttributes> => {
    const user = await User.findByPk(id);
    if(user) return user;
    else throw Error('Not found');
};


const createUser = async (entry: NewUserEntry): Promise<NewUserEntry> => {
    const existingUser =  await User.findOne({ where: { username: entry.username }});
    if(existingUser) throw new Error('Username already exists');
    const user = await User.create(entry);
    if(user) return user;
    else throw new Error('Bad data');
};

const removeUser = async (id: number): Promise<number> => {
    const deletedUser =  await User.destroy({where: { id }});
    return deletedUser;
};

const updateUser = async (id: number, updateUser: UserAttributes): Promise<UserAttributes | null> => {
    const user = await User.findByPk(id);
    if(!user) throw new Error('Not found');

    await user.update(updateUser);
    console.log(user);
    return user;
};

 export default {
    createUser, findById, getUsers, removeUser, updateUser
};
