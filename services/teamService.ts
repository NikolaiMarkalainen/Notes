
import { Team, User, Note } from "../models/index";
import { NewTeamEntry, TeamAttributes } from "../types";

const getTeams = async  (): Promise <TeamAttributes[]> => {
    const teams = await Team.findAll({
        include: {
            model: User,
            attributes: ['name', 'username'],
            include:[
            {
                model: Note,
                attributes:['title','content'],
            },
        ],
        },
    });
    return teams;
};

const findById = async (id: number): Promise<TeamAttributes | null> => {
    const team = await Team.findByPk(id);
    return team;
};


const createTeam = async (entry: NewTeamEntry): Promise<NewTeamEntry> => {
    const team = await Team.create(entry);
    console.log(team);
    return team;
};

const removeTeam = async (id: number): Promise<number> => {
    const deletedTeam =  await Team.destroy({where: { id }});
    return deletedTeam;
};

const updateTeam = async (id: number, updateTeam: TeamAttributes): Promise <TeamAttributes | null> => {
    const team = await Team.findByPk(id);
    console.log(team);
    if(!team) throw new Error('Not found');
    await team.update(updateTeam);
    return team;
};

 export default {
    createTeam, findById, getTeams, removeTeam, updateTeam
};




/*
import { Request, Response } from "express";
import { Router } from "express";
import  { Team, User, Note} from '../models/index';

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
*/