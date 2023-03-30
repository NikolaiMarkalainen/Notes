
export enum ActionType {ADD, DELETE, PUT, GET}

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
}

export type PostNote = {
    content: string,
    title: string,
    author: string,
    id: number,
    teamId: number | null,
    userId: number
}

export type PostTeam = {
    name: string
}

export type Team ={
    name: string,
    id: number
}

export type Note = {
    title: string,
    author: string,
    content: string,
    id: number,
    userId: number,
    teamId: number | null
}

export type NotePagination = {
    notes: Note[],
    pages: number,
    currentPage: number,
    totalResults: number
};

export type UserCreation = {
    name: string,
    username: string,
    password: string,
    teamId?: number | null,
    admin?: boolean
};

export type CreateNoteResponse = {
    data: Note;
}

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
    error: null,
};



export type TeamState = {
    teams: Team[],
    status: status,
    error: null
};

export type TeamPagination = {
    teams: Team[],
    pages: number,
    currentPage: number,
}

export type CreateTeamResponse = {
    notes: Note,
    teams: Team,
    users: User,
}

export type UserPagination = {
    users: User[], 
    pages: number,
    currentPage: number,
}

export type CreateUserResponse = {
    users: User
}


export enum status {
    loading = 'loading',
    idle = 'idle',
    error = 'error',
    fulfilled = 'fulfilled'
};

export type NotePaginationState ={
    notes: Note[],
    currentPage: number,
    pages: number,
    isLoading: boolean,
    error: null
}

export type paginatonAction = {
    page: number;
}


export type LoginParams = {
    username: string,
    password: string
}

export type LoginResponse = {
    message: string,
    error:{
        data?:{
            message: string
        }
    }
}

export type ErrorType = {
    status: number,
    data:{
        message: string
    }
}