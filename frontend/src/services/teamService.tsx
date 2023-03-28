import axios from "axios";
const baseUrl = '/api/teams';
import { TeamSchema } from "../types";
export const AllTeams = async (): Promise<TeamSchema[]> => {
    const request = await axios.get(baseUrl);
    return request.data
}