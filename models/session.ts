import { DataTypes, Model, Optional, CreationOptional } from "sequelize";
import {sequelize} from '../utils/db';
import { SessionAttributes } from "../types";


type SessionCreationAttributes = Optional<SessionAttributes, 'id' >;

class Session extends Model <SessionAttributes, SessionCreationAttributes> {
    declare id: CreationOptional<number>;
    declare userId: number;
    declare token: string;
}

Session.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'},
    },
    token:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'sessions'
});

export default Session;