export enum ActionType {ADD, DELETE, PUT, GET}

export type User = {
    name: string,
    username: string,
    password: string,
    teamId: number | null,
    admin: boolean,
    id: number
};

export type Note = {
    title: string,
    author: string,
    content: string,
    id: number,
    userId: number,
    teamId: number | null
};

export type Team = {
    name: string,
    id: number
};

export type UserCreation = {
    name: string,
    username: string,
    password: string,
    teamId?: number | null,
    admin?: boolean
};

export type NoteCreation = {
    title: string,
    author: string,
    content: string,
    id: number,
    userId: number,
    teamId?: number
};

export type TeamCreation = {
    name: string
};

export type UserState = {
    users: User[],
    status: status,
    error: null,
};

export type ListResponse<T> = {
    pages: number,
    currentPage: number
    data: T[]
}

export type NoteState = {
    notes: Note[],
    status: status,
    error: null
};



export type TeamState = {
    teams: Team[],
    status: status,
    error: null
};


export enum status {
    loading = 'loading',
    idle = 'idle',
    error = 'error',
    fulfilled = 'fulfilled'
};

export type UserAddedPayload = {
    type: ActionType,
    user: User
};
