
import { User } from "../models/index";
import { NewUserEntry, SearchRequest, UserAttributes, UserPagination, UserSearchParams } from "../types";

const getUsers = async  (req: SearchRequest ): Promise <UserAttributes[]> => {
    const where: UserSearchParams= req.where || {};
    const users = await User.findAll({where});
    return users;
};

const getPaginatedUsers = async( page : number ): Promise<UserPagination> =>  {
    
    try{
        const LIMIT = 3;
        const OFFSET = (Number(page)- 1) * LIMIT;        
        const amount = await User.count();
        const users = await User.findAll({
            limit: LIMIT,
            offset: OFFSET,
        });
        const pages = Math.ceil(amount / LIMIT);
        return {users, pages};
    } catch(error){
        console.error(error);
        throw new Error('Failed to fetch paginated users');
    }
}
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
    createUser, findById, getUsers, removeUser, updateUser, getPaginatedUsers
};
