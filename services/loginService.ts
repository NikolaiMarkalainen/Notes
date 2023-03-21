import { User, Session } from "../models/index";
import { LoginData } from "../types";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from "../utils/config";
const login = async (entry: LoginData): Promise <LoginData> => {
    const user = await User.findOne({ where: {username: entry.username}});

    const isCorrectPassword = user === null
    ? false
    : await bcrypt.compare(entry.password, user.password);
    if(!(user && isCorrectPassword)){
        console.log(user);
        throw Error('Incorrect username or password');
    }
    const userForToken = {
        username: user.username,
        id: user.id
    };
    const token = jwt.sign(userForToken, config.SECRET);
    console.log(token);
    await Session.create({ userId: user.id, token: token });
    
    return user;

};

export default {
    login,
};

