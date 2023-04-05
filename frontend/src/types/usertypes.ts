import { status } from "./types";

export type User = {
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
};

export type UserCreation = {
    name: string,
    username: string,
    password: string,
    teamId?: number | null,
    admin?: boolean
};

export type UserState = {
    users: User[],
    status: status,
    error: null,
};

export type UserPagination = {
    users: User[], 
    pages: number,
    currentPage: number,
};

export type CreateUserResponse = {
    users: User
};

