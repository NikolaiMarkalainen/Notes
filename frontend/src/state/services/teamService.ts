import { Api } from "./apiService"
import { TeamPagination, CreateTeamResponse, TeamCreation, Team } from "../../types/teamtypes"

export const TeamApi = Api.injectEndpoints({
    endpoints: (builder) =>({
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
    })
});

export const {
    useGetPaginatedTeamsQuery, useCreateTeamMutation, useGetAllTeamsQuery
} = TeamApi;
