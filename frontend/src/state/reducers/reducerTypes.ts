export enum ActionType {ADD, DELETE, PUT, GET}

export type User = {
    name: string,
    username: string,
    password: string,
    teamId: number | null,
    admin: boolean,
    id: number
};
export enum status {
    loading = 'loading',
    idle = 'idle',
    error = 'error',
    fulfilled = 'fulfilled'
};
export type UserCreation = {
    name: string,
    username: string,
    password: string,
    teamId?: number | null,
    admin?: boolean
}

export type UserAddedPayload = {
    type: ActionType,
    user: User
};

export type UserState = {
    users: User[],
    status: status,
    error: null
};