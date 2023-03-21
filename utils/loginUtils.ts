import { LoginData } from "../types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};


const parseUsername = (username: unknown): string => {
    if(!username || !isString(username)){
        throw Error('Incorrect username format');
    }
    return username;
};

const parsePassword = (password: unknown): string => {
    if(!password || !isString(password)){
        throw Error('Incorrect password format');
    }
    return password;
};

const LoginEntry = (object: unknown): LoginData => {
    if(!object || typeof object !== 'object'){
        throw Error('Incorrect or missing data');
    }
    if('username' in object && 'password' in object){
        const login: LoginData = {
            username: parseUsername(object.username),
            password: parsePassword(object.password),
        };
    return login;
    }
    throw Error('Incorrect or missing data');
};

export default LoginEntry;