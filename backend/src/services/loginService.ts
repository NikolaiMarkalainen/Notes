import { User, Session } from "../models/index";
import { LoginData, LoginPromise, LogoutPromiseWithoutToken } from "../types";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from "../utils/config";

const login = async (entry: LoginData): Promise <LoginPromise> => {
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
    
    return {user, token};

};


const logout = async (entry: string): Promise <LogoutPromiseWithoutToken> => {
    const session = await Session.findOne({where: {token: entry}});
    if(!session) throw Error('User not found');
    const user = await User.findOne({where: {id: session.userId}});
    if(!user) throw Error('User does not exsist');
    await session.destroy();
    return { user };

}

export default {
    login,
    logout
};

