import express from "express";
import loginService from '../services/loginService';
import { RequestHandler, Request, Response } from "express";
import LoginEntry from "../utils/loginUtils";
import { tokenExtractor } from "../utils/middleware";
import { LogoutRequest } from "../types";

const router = express.Router();
router.post('/login', (async (req: Request, res: Response) => {
    const loginData =  LoginEntry(req.body);
    const loginPromise = await loginService.login(loginData);
    console.log(loginPromise);
    return res.status(200).json({message: `${loginPromise.user.username} Successfully logged in`, token: loginPromise.token, user: loginPromise.user});
}) as RequestHandler );


router.delete('/logout', tokenExtractor, (async (req: LogoutRequest, res: Response) => {
    const token = req.token;
    const loginPromise = await loginService.logout(token);
    console.log(loginPromise)
    return res.status(200).json({message: `${loginPromise.user.username} Successfuly logged out` });
    
}) as RequestHandler);

export default router;