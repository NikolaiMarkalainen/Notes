import { DataTypes} from "sequelize";
import { MigrationContext } from "../types";

module.exports = {
    up: async ({context: queryInterface}: MigrationContext) => {
        await queryInterface.addColumn('users', 'team_id', {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete: 'SET NULL',
            references:{model: 'teams', key: 'id'}
        }),
        await queryInterface.addColumn('notes', 'user_id', {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete: 'SET NULL',
            references:{ 
                model: 'users',
                key: 'id',
            }
        }),
        await queryInterface.addColumn('notes', 'team_id', {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete: 'SET NULL',
            references:{ model: 'teams', key: 'id' }
        }),
        await queryInterface.addColumn('sessions', 'user_id', {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'users', key: 'id'},
        }),
        await queryInterface.addColumn('owners', 'user_id', {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{ 
                model: 'users',
                key: 'id',
            }
        }),
        await queryInterface.addColumn('owners', 'team_id', {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{ 
                model: 'teams',
                key: 'id',
            }
        });
    },
    down: async ({context: queryInterface} : MigrationContext) => {
        await queryInterface.removeColumn('teams','owner');
        await queryInterface.removeColumn('users', 'team_id');
        await queryInterface.removeColumn('notes', 'user_id');
        await queryInterface.removeColumn('notes', 'team_id');
        await queryInterface.removeColumn('sessions', 'user_id');
        await queryInterface.removeColumn('owners', 'user_id');
        await queryInterface.removeColumn('owners', 'team_id');

    }
};