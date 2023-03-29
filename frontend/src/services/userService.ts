import axios from "axios";
const baseUrl = '/api/users';
import { UserSchema, PostUser } from "../types";


export const allUsers = async (): Promise<UserSchema[]> => {
    const request = await axios.get(baseUrl);
    return request.data
};

export const saveUser = async ( newUser: PostUser ): Promise<UserSchema> => {
    const response = await axios.post(baseUrl, newUser);
    return response.data
};