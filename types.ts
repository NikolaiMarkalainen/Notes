import { QueryInterface } from "sequelize";

export type NoteAttributes = {
    id: number,
    title: string,
    content: string,
    author: string,
    userId: number,
    teamId?: number
};

export type NewNoteEntry = Omit<NoteAttributes, 'id' | 'teamId'>;

export type TeamAttributes = {
    id: number,
    name: string,
};

export type UserAttributes = {
    id: number,
    name: string,
    username: string,
    password: string,
    teamId: number
};


export interface Migration {
    name: string;
    timestamp: number;
  }

export interface MigrationContext {
    context: QueryInterface
}

export interface Config {
    USER: string,
    NAME: string,
    HOST: string,
    PASSWORD: string,
    DB_PORT: number,
    PORT: number
}

