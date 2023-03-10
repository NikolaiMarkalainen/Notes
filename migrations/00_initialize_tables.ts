import { DataTypes } from "sequelize"
import { MigrationContext } from "../types";

module.exports = {
    up: async ({context: queryInterface}: MigrationContext) => {
        await queryInterface.createTable('user', {
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
            }
        }),
        await queryInterface.createTable('note', {
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
                allowNull: false,
                references:{model: 'user', key: 'id'}
            },
        })
    },
    down: async ({context: queryInterface} : MigrationContext) => {
        await queryInterface.dropTable('note');
        await queryInterface.dropTable('user')
    },
}
