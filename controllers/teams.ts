import { Request, Response } from "express";
import { Router } from "express";
import sequelize from "sequelize";
const  { Team } = require('../models/index');

export const TeamRouter = Router();


TeamRouter.get('/', async (_req: Request, res: Response) => {
    const teams = await Team.findAll({
        attributes: {
            exclude: ['userId', 'noteId'] ,
            include:[
                [sequelize.literal('(SELECT COUNT(*) FROM users WHERE users.teamId = Team.id)'), 'members']
            ]
        }
    })
    if(teams) res.json(teams);
})
/*
TeamRouter.post('/', async (req: Request, res: Response) => {
    
})

TeamRouter.delete('/:id', async (req: Request, res: Response) => {
    
})

TeamRouter.put('/:id', async (req: Request, res: Response) => {
    
})*/