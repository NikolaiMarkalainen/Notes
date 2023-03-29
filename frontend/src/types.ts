import { PathRouteProps } from "react-router-dom";

export type UserSchema = {
    name: string,
    username: string,
    password: string,
    admin: boolean,
    id: number,
    teamId: number | null,
};

export type PostUser = {
    name: string,
    username: string,
    password: string,
    teamId?: number | null,
    admin?: boolean
}

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
