import axios from "axios";
const baseUrl = '/api/users';
const paginationURL = '/api/users/pagination'
import { UserSchema, PostUser, UserPagination } from "../types";


export const allUsers = async (): Promise<UserSchema[]> => {
    const request = await axios.get(baseUrl);
    return request.data
};

export const getPaginatedUsers = async (page: number): Promise<UserPagination> =>{
    const request = await axios.get(`${paginationURL}/${page}`);
    return request.data;
};

export const saveUser = async ( newUser: PostUser ): Promise<UserSchema> => {
    const response = await axios.post(baseUrl, newUser);
    return response.data
};