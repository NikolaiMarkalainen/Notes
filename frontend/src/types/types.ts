export * from "./logintypes"
export * from "./notetypes"
export * from "./notificationtypes"
export * from "./teamtypes"
export * from "./usertypes"

export enum ActionType {ADD, DELETE, PUT, GET}

export type ListResponse<T> = {
    pages: number,
    currentPage: number
    data: T[]
}

export enum status {
    loading = 'loading',
    idle = 'idle',
    error = 'error',
    fulfilled = 'fulfilled'
};

export type paginatonAction = {
    page: number;
}

export type ErrorType = {
    status: number,
    data:{
        message: string
    }
}




