import { Request, Response } from "express";
import { Router } from "express";
import  User  from '../models/user';
export const UserRouter = Router();


UserRouter.get('/', async (_req: Request, res: Response) => {
    const users = await User.findAll({})
    if(users) res.json(users);  
})
/*
UserRouter.post('/', async (req: Request, res: Response) => {
    
})

UserRouter.put('/:id', async (req: Request, res: Response) => {
    
})

UserRouter.delete('/:id', async (req: Request, res: Response) => {
    
})*/