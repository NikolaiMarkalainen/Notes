import { Request, Response } from "express";
import { Router } from "express";
const  { Team, User, Note} = require('../models/index');

export const TeamRouter = Router();


TeamRouter.get('/', async (_req: Request, res: Response) => {
    const teams = await Team.findAll({
        include: {
            model: User,
            attributes: ['name', 'username'],
            include:{
                model: Note,
                attributes: ['title', 'content'],
            }
        }
    });
    if(teams) res.json(teams);
})

/*
TeamRouter.post('/', async (req: Request, res: Response) => {
    
})

TeamRouter.delete('/:id', async (req: Request, res: Response) => {
    
})

TeamRouter.put('/:id', async (req: Request, res: Response) => {
    
})*/