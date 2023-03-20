import { NewUserEntry } from "../types";


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isBoolean = (admin: unknown): admin is boolean => {
    return typeof admin === 'boolean' || admin instanceof Boolean;
};

const isTeam = (id: unknown): id is number => {
    return typeof id === 'number';
};

const parseName =  (name: unknown): string => {
    if(!name || !isString(name)){
        throw Error('Incorrect or missing team name');
    }
    return name;
};

const parsePassword = (password: unknown): string => {
    if(!password || !isString(password)){
        throw Error('Incorrect or missing password');
    } 
    return password;
};


const parseUsername = (username: unknown): string => {
    if(!username || !isString(username)){
        throw Error('Incorrect or missing username');
    }
    return username;
};

const parseAdmin = (admin: unknown): boolean => {
    if(!admin || !isBoolean(admin)){
        throw Error('User missing admin attribute');
    }
    return admin;
};

const parseTeam = (team: unknown) : number | null => {
    if(!team || !isTeam(team)){
        return null;
    }
    return team;
};

const toNewUserEntry = (object: unknown): NewUserEntry => {
    if(!object || typeof object !== 'object'){
        throw Error('Incorrect or missing data');
    }
    if('name' in object && 'username' in object && 'password' in object && 'admin' in object) {
        const newUser: NewUserEntry = {
            name: parseName(object.name),
            admin: parseAdmin(object.admin),
            username: parseUsername(object.username),
            password: parsePassword(object.password),
        };
        if('teamId' in object) {
            newUser.teamId = parseTeam(object.teamId);
        }
        return newUser;
    }
    throw Error('Incorrect or missing data');
};


export default toNewUserEntry;