import { PathRouteProps } from "react-router-dom";

export type UserSchema = {
    name: string,
    username: string,
    admin: boolean,
    id: number,
    teamId: number,
    userId: number
};

export type TeamSchema ={
    name: string,
    id: number
}

export type NoteSchema = {
    title: string,
    author: string,
    content: string,
    id: number,
    userId: number,
    teamId: number
}