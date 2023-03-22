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
            admin:{
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }
        }),
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
        }),
        await queryInterface.createTable('sessions', {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            token: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
        }),
        await queryInterface.createTable('owners', {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
        });
        },
    down: async ({context: queryInterface} : MigrationContext) => {
        await queryInterface.dropTable('notes', {cascade: true});
        await queryInterface.dropTable('sessions', {cascade: true});
        await queryInterface.dropTable('owners', {cascade: true});
        await queryInterface.dropTable('users', {cascade: true});
        await queryInterface.dropTable('teams', {cascade: true});
    },
};
