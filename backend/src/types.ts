import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { QueryInterface, Sequelize } from "sequelize";
import { User } from "./models";
export type NoteAttributes = {
    id: number,
    title: string,
    content: string,
    author: string,
    userId: number,
    teamId?: number
};

export type NewNoteEntry = Omit<NoteAttributes, 'id' | 'teamId'>;


export type SessionAttributes = {
    id: number,
    userId: number,
    token: string
};


export type TeamAttributes = {
    id: number,
    name: string,
};

export type NewTeamEntry = Omit<TeamAttributes, 'id'>;


export type UserAttributes = {
    id: number,
    name: string,
    username: string,
    password: string,
    admin: boolean,
    teamId?: number | null
};

export type NewUserEntry = Omit<UserAttributes, 'id'>;

export type UpdateUserEntry = {
    id?: number,
    name?: string,
    username?: string,
    password?: string,
    admin?: boolean,
    teamId?: number | null
};

export interface Migration {
    name: string;
    timestamp: number;
  }

export interface MigrationContext {
    context: QueryInterface,
    Sequelize?: Sequelize
}

export interface ErrorHandling {
    error: Error,
    res: Response,
    req: Request,
    next: NextFunction
}


export interface Config {
    USER: string,
    NAME: string,
    HOST: string,
    PASSWORD: string,
    DB_PORT: number,
    PORT: number,
    SECRET: string
}

export type LoginData = {
    username: string,
    password: string
};

export interface AuthenticatedRequest extends Request {
    user: User,
    token: string,
    decodedToken: string | JwtPayload;
}

export type OwnerAttributes = {
    id: number,
    userId: number,
    teamId: number
};

export type UserSearchParams = {
    name?: string,
    username?: string,
    admin?: boolean,
    teamId?: number | null
};

export type NoteSearchParams ={
    userId?: number, 
    teamId?: number,
    author?: string,
    content?: string,
    title?: string
};

export type TeamSearchParams = {
    name?: string
};

export interface SearchRequest extends Request {
    where: object
}

export type SearchParams = {
    [key: string]: string | number | boolean
};

export type UserPagination = {
    users: UserAttributes[],
    pages: number
    currentPage: number,
    totalResults: number
};

export type TeamPagination = {
    teams: TeamAttributes[],
    pages: number,
    currentPage: number,
    totalResults: number,
};

export type NotePagination = {
    notes: NoteAttributes[],
    pages: number,
    currentPage: number,
    totalResults: number,
};

export interface PaginationRequest extends Request  {
    page: number
}

