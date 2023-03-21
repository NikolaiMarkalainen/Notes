import { DataTypes } from "sequelize";
import { MigrationContext } from "../types";

module.exports = {
    up: async ({context: queryInterface}: MigrationContext) => {
        await queryInterface.createTable('teams', {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false
            },
        }),
        await queryInterface.createTable('users', {
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
            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            team_id:{
                type: DataTypes.INTEGER,
                allowNull: true,
                onDelete: 'SET NULL',
                references:{model: 'teams', key: 'id'}
            },
        }),
        console.log(queryInterface);
        await queryInterface.createTable('notes', {
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
            // onDelete delete the notes of user as well
            user_id:{
                type: DataTypes.INTEGER,
                allowNull: true,
                onDelete: 'SET NULL',
                references:{ 
                    model: 'users',
                    key: 'id',
                }
            },
            team_id:{
                type: DataTypes.INTEGER,
                allowNull: true,
                onDelete: 'SET NULL',
                references:{ model: 'teams', key: 'id' }
            },
        }),
        await queryInterface.createTable('sessions', {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id'},
            },
            token: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
        });
        },
        
    down: async ({context: queryInterface} : MigrationContext) => {
        await queryInterface.dropTable('notes');
        await queryInterface.dropTable('sessions');
        await queryInterface.dropTable('users');
        await queryInterface.dropTable('teams');
    },
};
