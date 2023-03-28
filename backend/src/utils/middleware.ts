import { NextFunction, Request, RequestHandler, Response } from "express";
import config from './config';
import { User, Session, Owner } from "../models/index";
import { AuthenticatedRequest, SearchParams, SearchRequest } from "../types";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

export const tokenExtractor = async (req: AuthenticatedRequest, _res: Response, next: NextFunction) => {
    const authorization = req.get('authorization');
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        const token = authorization.substring(7);
        try{
            const session = await Session.findOne({where: {token}});
            if(!session) throw Error('Invalid session');

            const user = await User.findByPk(session.userId);

            if(!user) throw Error('Invalid session');

            const decodedToken = jwt.verify(token, config.SECRET);
            
            req.token = token;
            req.decodedToken = decodedToken;
            req.user = user;

        } catch{
            throw Error('Invalid token');
        }
    }
     else throw Error('Missing token');
    next();
};

export const isOwner = async (req: AuthenticatedRequest, _res: Response, next: NextFunction) => {
        // authenticatedrequest having user field already now we check whether there is a valid owner
        // found behind userid 
        const owner = await Owner.findOne({where: {userId: req.user.id, teamId: req.params.id}});
        //condition met sending in next function to continue code
        if(owner) next();
        else throw Error('Missing user authorization');
}; 

const buildWhereQuery = (params: SearchParams ) : object => {
    const where: {[key: string]: unknown} = {};
        Object.keys(params).forEach((key: string) => {
        const value = params[key];
        // checking conditions whether true false or numeric number
        const convertedValue = Number(value);
        if (!isNaN(convertedValue)) {
          where[key] = { [Op.eq]: convertedValue };
        } else if (value === 'true' || value === 'false') {
          where[key] = { [Op.eq]: value };
        } else {
          where[key] = { [Op.iLike]: `%${value}%` };
        }
    });
    return where;
};

export const searchMiddleware = (queryParams: string[]): RequestHandler => {
    return (req: SearchRequest, _res:Response, next: NextFunction) => {
        const searchParams : SearchParams = {};
        queryParams.forEach((param) =>{
            const value = req.query[param];
            if(typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                searchParams[param] = value;
            }
        });
        req.where= buildWhereQuery(searchParams);
        next();
    };
};


/*const isAdmin = async(req, res, next) => {
    const user = await User.findByPK(req.user.id);
    if(user) next();
    else throw Error('Missing user authorization');

};*/


export const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log('IN ERROR HANDLER');
    console.log(error);
    console.log(error.message);
    switch(error.message){
        case 'No data':
        case 'Not found':
                return res.status(404).send({ message: 'No data behind endpoint'}); 

        case 'Bad data':
            return res.status(400).send({ message: 'Data is malformatted enter data in correct format!'});

        case 'Validation error: Validation isEmail on username failed':
            return res.status(404).send({ message: 'Username has to be in email format !'});
        
        case 'Username already exists':
            return res.status(409).send({ message: 'Username already in use, try a different username'});

        case 'Incorrect or missing team name':
             return res.status(401).send({ message: 'Please enter a valid team.'});

        case 'Incorrect or missing password':
             return res.status(401).send({ message: 'Please enter a valid password.'});

        case 'Incorrect or missing username':
            return res.status(401).send({ message: 'Please enter a valid username.'});

        case 'Incorrect or missing data':
            return res.status(400).send({ message: 'Please enter valid data.'});

        case 'Incorrect or missing content':
            return res.status(400).send({ message: 'Please enter valid content.'});

        case 'Incorrect or missing author':
            return res.status(400).send({ message: 'Please enter valid author.'});

        case 'Missing user authorization':  
            return res.status(404).send({ message: 'User is not authorized to perform this action.'});

        case 'Incorrect or missing title':
            return res.status(400).send({ message: 'Please enter a valid title.'});

        case 'Incorrect data: a field is missing':
            return res.status(400).send({ message: 'Please fill out all required fields.'});

        case 'Deleted':
            return res.status(200).send({ message: 'Deleted successfully.'});

        case 'Invalid session':
            return res.status(404).send({ message: 'Invalid session'});

        case 'Missing token':
            return res.status(400).send({ message: 'Token missing from request'});

        case 'Invalid token':
            return res.status(400).send({ message: 'Token is invalid'});

        case 'Incorrect username format':
            return res.status(400).send({ message: 'Username format is invalid' });
            
        case 'Incorrect password format':
            return res.status(400).send({ message: 'Password format is invalid' });

        case 'Incorrect username or password':
            return res.status(401).send({ message: 'Incorrect username or password' });

        case 'Note not found':
            return res.status(404).send({ message: 'Note not found'});

        default:
            return res.status(500).send({ message: 'Something went wrong'});
    }
};

