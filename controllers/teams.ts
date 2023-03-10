import { Request, Response } from "express";
import { Router } from "express";
import  Team  from '../models/teams';

export const TeamRouter = Router();


TeamRouter.get('/', async (_req: Request, res: Response) => {
    const teams = await Team.findAll({})
    if(teams) res.json(teams);
})
/*
TeamRouter.post('/', async (req: Request, res: Response) => {
    
})

TeamRouter.delete('/:id', async (req: Request, res: Response) => {
    
})

TeamRouter.put('/:id', async (req: Request, res: Response) => {
    
})*/