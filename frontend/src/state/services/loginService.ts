import { Api } from "./apiService"
import { LoginResponse, LoginParams, LoggedState, LogoutResponse } from "../../types/logintypes"


export const LoginApi = Api.injectEndpoints({
    endpoints: (builder) => ({

        loginUser: builder.mutation<LoginResponse, LoginParams>({
            query: (login: LoginParams ) => ({
                url: 'login',
                method: 'POST',
                body: login,
            })
        }),
        logoutUser: builder.mutation<LogoutResponse, LoggedState>({
            query: (logout: LoggedState) => ({
                url: '/logout',
                method: 'DELETE',
                body: logout,
            }),
        })
    }),
});


export const {useLoginUserMutation, useLogoutUserMutation} = LoginApi;