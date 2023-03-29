import axios from "axios";
const baseUrl = '/api/teams';
import { PostTeam, TeamSchema } from "../types";


export const allTeams = async (): Promise<TeamSchema[]> => {
    const request = await axios.get(baseUrl);
    return request.data
};

export const saveTeam = async ( newTeam: PostTeam ): Promise<TeamSchema> => {
    const response = await axios.post(baseUrl, newTeam);
    return response.data
};