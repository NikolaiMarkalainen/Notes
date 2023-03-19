
import { User } from "../models/index";
import { NewUserEntry, UserAttributes } from "../types";

const getUsers = async  (): Promise <UserAttributes[]> => {
    const users = await User.findAll();
    return users;
};

const findById = async (id: number): Promise<UserAttributes | null> => {
    const user = await User.findByPk(id);
    return user;
};


const createUser = async (entry: NewUserEntry): Promise<NewUserEntry> => {
    const user = await User.create(entry);
    return user;
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


/*
import { Request, Response } from "express";
import { Router } from "express";
import  User  from '../models/user';
export const UserRouter = Router();


UserRouter.get('/', async (_req: Request, res: Response) => {
    const users = await User.findAll({});
    if(users) res.json(users);  
});

UserRouter.post('/', async (req: Request, res: Response) => {
    const user = await User.create(req.body);
    if(user) res.json(user);
    else throw Error('Bad data');
});


UserRouter.put('/:id', async (req: Request, res: Response) => {
    const user = await User.findByPk(req.params.id);
    if(user){
        user.password = req.body.password;
        user.name = req.body.name;
        user.username = req.body.username;
        await user.save();
        res.json(user);
    } else throw Error('Not found');
});

UserRouter.delete('/:id', async (req: Request, res: Response) => {
    const user = await User.findByPk(req.params.id);
    if(user) {
        await user.destroy();
        res.status(201).end();
    } else throw Error('Not found');
});

UserRouter.get('/:id', async (req: Request, res: Response) => {
    const user = await User.findByPk(req.params.id);
    if(user) res.json(user);
    else throw Error('Not found');
});
*/