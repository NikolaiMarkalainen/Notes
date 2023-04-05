import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateNoteResponse, NotePagination, NoteCreation, Note, 
    UserCreation, UserPagination, CreateUserResponse, User,
    TeamCreation, TeamPagination, CreateTeamResponse, Team,
    LoginParams, LoginResponse, LoggedState, LogoutResponse   } from "../../types";
import { useAppDispatch } from '../../hooks';
import { setLoggedState } from '../reducers/loggedUser';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).login.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery,
    endpoints: (builder) => ({
        getPaginatedNotes: builder.query<NotePagination, number>({
            query: (page) => `notes/pagination?page=${page}`,
        }),
        createNote: builder.mutation<CreateNoteResponse, NoteCreation>({
            query: (note) => ({
                url: 'notes',
                method: 'POST',
                body: note,
            })
        }),
        getAllNotes: builder.query<Note, void>({
            query:() => 'notes'
        }),
        getPaginatedTeams: builder.query<TeamPagination, number>({
            query: (page) => `teams/pagination?page=${page}`,
        }),
        createTeam: builder.mutation<CreateTeamResponse, TeamCreation>({
            query: (note) => ({
                url: 'teams',
                method: 'POST',
                body: note,
            })
        }),
        getAllTeams: builder.query<Team, void>({
            query:() => 'teams',
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


export const {
    useGetPaginatedNotesQuery, useCreateNoteMutation, useGetAllNotesQuery,
    useGetPaginatedTeamsQuery, useCreateTeamMutation, useGetAllTeamsQuery,
    useGetPaginatedUsersQuery, useCreateUserMutation, useGetAllUsersQuery,
    useLoginUserMutation, useLogoutUserMutation, 
} = Api

