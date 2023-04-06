import { Api } from "./apiService"
import { Note, UserPagination, CreateUserResponse, UserCreation, User } from "../../types/types"



export const UserApi = Api.injectEndpoints({
    endpoints: (builder) => ({
        getUserSpecificNotes: builder.query<Note[], number>({
            query:(id) => `notes?userId=${id}`
        }),
        
        getPaginatedUsers: builder.query<UserPagination, number>({
            query: (page) => `users/pagination?page=${page}`,
        }),
        createUser: builder.mutation<CreateUserResponse, UserCreation>({
            query: (note) => ({
                url: 'users',
                method: 'POST',
                body: note,
            })
        }),
        getAllUsers: builder.query<User, void>({
            query:() => 'users',
        }),        
    }),
});

export const{ useCreateUserMutation, useGetPaginatedUsersQuery, useGetUserSpecificNotesQuery, useGetAllUsersQuery } = UserApi;