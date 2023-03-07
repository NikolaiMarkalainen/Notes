import { Optional, CreationOptional, DataTypes, Model } from "sequelize";
import { NoteAttributes } from "../types";

const { sequelize } = require('../utils/db');

type NoteCreationAttributes = Optional<NoteAttributes, 'id'>;

class Note extends Model<NoteAttributes, NoteCreationAttributes> { 
    declare id: CreationOptional<number>;
    declare title: string;
    declare author: string;
    declare content: string;
};
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
    }
    }, {
        timestamps: false,
        underscored: true,
        modelName: 'note',
        sequelize
    });

module.exports = Note