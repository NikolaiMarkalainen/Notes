import { Optional, DataTypes, Model } from "sequelize";
import { OwnerAttributes } from "../types";

import { sequelize } from '../utils/db';

type OwnerCreationAttributes = Optional<OwnerAttributes, 'id'>;

class Owner extends Model<OwnerAttributes, OwnerCreationAttributes> { 
    declare id: number;
    declare userId: number;
    declare teamId: number;
}
Owner.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'users',
            key: 'id',
        },
    },
    teamId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'teams',
            key: 'id'
        }
    }
    }, {
        timestamps: false,
        underscored: true,
        modelName: 'owners',
        sequelize
    });

export default Owner;