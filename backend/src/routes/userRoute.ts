import express from "express";
import userService from '../services/userService';
import { RequestHandler } from "express";
import {toNewUserEntry, updateUserEntry} from "../utils/userUtils";
import { SearchRequest, UserAttributes} from "../types";
import  {searchMiddleware, tokenExtractor}from "../utils/middleware";
const router = express.Router();
// async has to be labeled as RequestHandler to function properly in requests



router.get('/', searchMiddleware (['name','username','teamId','admin']), (async (req, res) => {
    //http://localhost:5000/api/users?search=john
    const users = await userService.getUsers(req as SearchRequest);
    if(users) res.send(users); 
    else throw Error('Not found');
}) as RequestHandler);


router.get('/:id', (async (req,res) => {
    const user = await userService.findById(Number(req.params.id));
    if(user) res.send(user);
    else throw Error('Not found'); 
}) as RequestHandler );

router.get('/pagination/:page', (async (req, res) => {
    const users = await userService.getPaginatedUsers(Number(req.params.page));
    if(users) res.send(users);
    else throw Error('Not found');
})  as RequestHandler)

router.post('/', tokenExtractor, (async (req, res) => {
    const newUser = toNewUserEntry(req.body);
    console.log(newUser);
    const addedUser = await userService.createUser(newUser);
    console.log(addedUser);
    if(addedUser) res.json(addedUser);
    else throw Error('Bad data');
}) as RequestHandler);


router.delete('/:id', tokenExtractor, (async (req, _res) => {
    const deleted = await userService.removeUser(Number(req.params.id));
    if(deleted) throw Error('Deleted');
    else throw Error('Not found');
}) as RequestHandler);


router.put('/:id', tokenExtractor, (async (req, res) => {
    const newUser = updateUserEntry(req.body) as UserAttributes;
    const addedUser = await userService.updateUser(Number(req.params.id), newUser);
    if(addedUser) res.json(addedUser);
    else throw Error('Bad data');
}) as RequestHandler );


export default router;