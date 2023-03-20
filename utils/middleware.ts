import { NextFunction, Request, Response } from "express";


const errorHandler = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.log('IN ERROR HANDLER');
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
            return res.status(401).send({ message: 'User is not authorized to perform this action.'});

        case 'Incorrect or missing title':
            return res.status(400).send({ message: 'Please enter a valid title.'});

        case 'Incorrect data: a field is missing':
            return res.status(400).send({ message: 'Please fill out all required fields.'});

        case 'Deleted':
            return res.status(200).send({ message: 'Deleted successfully.'});
            
        default:
            return res.status(500).send({ message: 'Something went wrong'});
    }
};



export default {
    errorHandler
};