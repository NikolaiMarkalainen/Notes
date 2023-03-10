import { Optional, CreationOptional, DataTypes, Model } from "sequelize";
import { TeamAttributes } from "../types";

const { sequelize } = require('../utils/db');

type TeamCreationAttributes = Optional<TeamAttributes, 'id'>;

class Team extends Model<TeamAttributes, TeamCreationAttributes> { 
    declare id: CreationOptional<number>;
    declare name: String;
    declare userId: CreationOptional<number>;
    declare noteId: CreationOptional<number>;
};
Team.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'}
    },
    noteId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: 'notes', key: 'id'}
    }
    }, {
        timestamps: false,
        underscored: true,
        modelName: 'teams',
        sequelize
    });

export default Team