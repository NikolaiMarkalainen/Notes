import { Optional, DataTypes, Model } from "sequelize";
import { NoteAttributes } from "../types";

import { sequelize } from '../utils/db';

type NoteCreationAttributes = Optional<NoteAttributes, 'id' | 'teamId'>;

class Note extends Model<NoteAttributes, NoteCreationAttributes> { 
    declare id: number;
    declare title: string;
    declare author: string;
    declare content: string;
    declare userId: number;
    declare teamId: number;
}
Note.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{model: 'users', key: 'id'}
    },
    teamId:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{model: 'teams', key: 'id'}
    },
    }, {
        timestamps: false,
        underscored: true,
        modelName: 'notes',
        sequelize
    });

export default Note;