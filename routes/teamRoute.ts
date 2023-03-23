import express from "express";
import teamService from '../services/teamService';
import { RequestHandler } from "express";
import toNewTeamEntry from "../utils/teamUtils";
import { AuthenticatedRequest, TeamAttributes } from "../types";
import middleware from "../utils/middleware";
const router = express.Router();

// async has to be labeled as RequestHandler to function properly in requests

router.get('/', (async (_req, res) => {
    const teams = await teamService.getTeams();
    res.send(teams);
}) as RequestHandler);


router.get('/:id', (async (req,res) => {
    const team = await teamService.findById(Number(req.params.id));
    if(team) res.send(team);
    else throw Error('Not found');

}) as RequestHandler);

router.post( '/', middleware.tokenExtractor,(async (req: AuthenticatedRequest ,res) => {
    const newTeam = toNewTeamEntry(req.body);
    const addedTeam = await teamService.createTeam(newTeam);
    if (addedTeam) res.json(addedTeam);
    else throw Error('Bad data');
}) as RequestHandler);


router.delete('/:id', middleware.tokenExtractor, middleware.isOwner, (async (req : AuthenticatedRequest, _res) => {
    const deleted = await teamService.removeTeam(Number(req.params.id));
    if(deleted) throw Error('Deleted');
    else throw Error('Not found');

}) as RequestHandler);


router.put('/:id', middleware.tokenExtractor, middleware.isOwner, (async (req : AuthenticatedRequest, res) => {
    const newTeam = toNewTeamEntry(req.body) as TeamAttributes;
    const addedTeam = await teamService.updateTeam(Number(req.params.id), newTeam);
    if (addedTeam) res.json(addedTeam);
    else throw Error('Bad data');
}) as RequestHandler );


export default router;