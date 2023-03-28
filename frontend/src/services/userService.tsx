import axios from "axios";
const baseUrl = '/api/users';
import { UserSchema } from "../types";
export const AllUsers = async (): Promise<UserSchema[]> => {
    const request = await axios.get(baseUrl);
    return request.data
}