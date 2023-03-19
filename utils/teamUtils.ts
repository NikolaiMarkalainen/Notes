import { NewTeamEntry } from "../types";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseName =  (name: unknown): string => {
    if(!name || !isString(name)){
        throw Error('Incorrect or missing team name');
    }
    return name;
};


const toNewTeamEntry = (object: unknown): NewTeamEntry => {
    if(!object || typeof object !== 'object'){
        throw new Error('Incorrect or missing data');
    }
    if('name' in object) {
        const newTeam: NewTeamEntry = {
            name: parseName(object.name)
        };

    return newTeam;
    }
    throw new Error('Incorrect or missing data');
};

export default toNewTeamEntry;