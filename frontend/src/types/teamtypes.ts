import { status, Note, User } from "./types";

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

export type PostTeam = {
    name: string
}

export type TeamCreation = {
    name: string
};

export type Team ={
    name: string,
    id: number
};

export type TeamArray = Team[];
