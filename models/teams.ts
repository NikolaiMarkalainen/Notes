import { Optional, CreationOptional, DataTypes, Model } from "sequelize";
import { TeamAttributes } from "../types";

const { sequelize } = require('../utils/db');

type TeamCreationAttributes = Optional<TeamAttributes, 'id'>;

class Team extends Model<TeamAttributes, TeamCreationAttributes> { 
    declare id: CreationOptional<number>;
    declare name: string;
    declare userId: CreationOptional<number>;
}
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
    }, {
        timestamps: false,
        underscored: true,
        modelName: 'teams',
        sequelize
    });

export default Team;