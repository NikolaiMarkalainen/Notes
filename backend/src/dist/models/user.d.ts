import { Optional, CreationOptional, Model } from "sequelize";
import { UserAttributes } from "../types";
type UserCreationAttributes = Optional<UserAttributes, 'id'>;
declare class User extends Model<UserAttributes, UserCreationAttributes> {
    id: CreationOptional<number>;
    name: string;
    username: string;
    password: string;
    teamId: CreationOptional<number>;
}
export default User;
