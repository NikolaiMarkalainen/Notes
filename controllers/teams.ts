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
});

TeamRouter.get('/:id', async (req: Request, res: Response) => {
    const team = Team.findByPk(req.params.id);
    if(team) res.json(team);
    else throw Error('Not found');
});

TeamRouter.post('/', async (req: Request, res: Response) => {
    const team = await Team.create(req.body);
    if(team) res.json(team);
    else throw Error('Bad data');
});

TeamRouter.delete('/:id', async (req: Request, res: Response) => {
    const team = await Team.findByPk(req.params.id);
    if(team){
        await team.destroy();
        res.status(201).end();
    } else throw Error('Not found');
});

TeamRouter.put('/:id', async (req: Request, res: Response) => {
    const team = await Team.findByPk(req.params.id);
    if(team){
        team.name = req.body.name;
        await team.save();
        res.json(team);
    } else throw Error('Not found');
});