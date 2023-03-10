import { QueryInterface } from "sequelize";

export type NoteAttributes = {
    id: number,
    title: string,
    content: string,
    author: string,
    userId: number
}

export type TeamAttributes = {
    id: number,
    name: string,
    userId: number,
    noteId: number,
}

export type UserAttributes = {
    id: number,
    name: string,
    username: string,
    password: string,
}


export interface Migration {
    name: string;
    timestamp: number;
  }

export interface MigrationContext {
    context: QueryInterface
}

