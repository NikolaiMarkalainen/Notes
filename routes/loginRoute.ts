import express from "express";
import loginService from '../services/loginService';
import { RequestHandler, Request, Response } from "express";
import LoginEntry from "../utils/loginUtils";

const router = express.Router();
router.post('/', (async (req: Request, res: Response) => {
    const loginData =  LoginEntry(req.body);
    const user = await loginService.login(loginData);
    return res.status(200).json({message: `${user.username} Successfully logged in`});
}) as RequestHandler );


export default router;