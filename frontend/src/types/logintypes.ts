import { User } from "./usertypes"

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
    },
    user: User,
    token: string
}

export type LoggedState = {
    user: User | null,
    token: string,
    isLogged: boolean;
}

export type LogoutResponse = {
    message: string,
    error:{
        data?:{
            message: string
        }
    }
    user: User | null,
    token: string,
    isLogged: boolean;
}
