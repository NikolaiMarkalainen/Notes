import express from "express";
import userService from '../services/userService';
import { RequestHandler } from "express";
import toNewUserEntry from "../utils/userUtils";
import { UserAttributes } from "../types";
const router = express.Router();

// async has to be labeled as RequestHandler to function properly in requests

router.get('/', (async (_req, res) => {
    const users = await userService.getUsers();
    res.send(users);
}) as RequestHandler);


router.get('/:id', (req,res) => {
    userService.findById(Number(req.params.id))
    .then(user => {
            if(!user) throw Error('Not found');
            res.send(user);
        }).catch(error => {
            console.error(error);
            res.status(500).send('Server side error');
        });
});

router.post('/', (async (req,res) => {
    const newUser = toNewUserEntry(req.body);
    console.log(newUser);
    const addedUser = await userService.createUser(newUser);
    res.json(addedUser);
}) as RequestHandler);


router.delete('/:id', (async (req, res) => {
    await userService.removeUser(Number(req.params.id))
    .then(() => {
            res.status(204).send('Deleted successfuly');
        }).catch((error) => res.send(error));
}) as RequestHandler);


router.put('/:id', (async (req, res) => {
    const newUser = toNewUserEntry(req.body) as UserAttributes;
    const addedUser = await userService.updateUser(Number(req.params.id), newUser);
    res.json(addedUser);
}) as RequestHandler );


export default router;