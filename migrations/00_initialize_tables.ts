import { DataTypes } from "sequelize"
import { MigrationContext } from "../types";

module.exports = {
    up: async ({context: queryInterface}: MigrationContext) => {
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
            user_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references:{ model: 'users', key: 'id' }
            },
        }),
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
            user_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' }
            },
            note_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'notes', key: 'id' }
            },
        })
        },
        
    down: async ({context: queryInterface} : MigrationContext) => {
        await queryInterface.dropTable('teams');
        await queryInterface.dropTable('notes');
        await queryInterface.dropTable('users');
    },
}
