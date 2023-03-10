import { Optional, CreationOptional, DataTypes, Model } from "sequelize";
import { UserAttributes } from "../types";

const { sequelize } = require('../utils/db');

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> { 
    declare id: CreationOptional<number>;
    declare name: String;
    declare username: String;
    declare password: String;
    declare teamId: CreationOptional<number>;
};
User.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail: true
        },
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [8,18]
        }
    },
    teamId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{model: 'teams', key: 'id'}
    },
    }, {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'users',
    });

export default User