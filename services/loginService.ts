import { User } from "../models/index";
import { LoginData } from "../types";

const login = async (entry: LoginData): Promise <LoginData> => {
    const user = await User.findOne({ where: {username: entry.username}});
}