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