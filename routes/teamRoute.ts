import express from "express";
import teamService from '../services/teamService';
import { RequestHandler } from "express";
import toNewTeamEntry from "../utils/teamUtils";
import { TeamAttributes } from "../types";
const router = express.Router();

// async has to be labeled as RequestHandler to function properly in requests

router.get('/', (async (_req, res) => {
    const teams = await teamService.getTeams();
    res.send(teams);
}) as RequestHandler);


router.get('/:id', (req,res) => {
    teamService.findById(Number(req.params.id))
    .then(team => {
            if(!team) throw Error('Not found');
            res.send(team);
        }).catch(error => {
            console.error(error);
            res.status(500).send('Server side error');
        });
});

router.post('/', (async (req,res) => {
    console.log('in post methoid!!!');
    const newTeam = toNewTeamEntry(req.body);
    const addedTeam = await teamService.createTeam(newTeam);
    res.json(addedTeam);
}) as RequestHandler);


router.delete('/:id', (async (req, res) => {
    await teamService.removeTeam(Number(req.params.id))
    .then(() => {
            res.status(204).send('Deleted successfuly');
        }).catch((error) => res.send(error));
}) as RequestHandler);


router.put('/:id', (async (req, res) => {
    const newTeam = toNewTeamEntry(req.body) as TeamAttributes;
    console.log(newTeam);
    const addedTeam = await teamService.updateTeam(Number(req.params.id), newTeam);
    res.json(addedTeam);
}) as RequestHandler );


export default router;