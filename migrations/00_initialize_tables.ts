import { DataTypes } from "sequelize"
import { MigrationContext } from "../types";

module.exports = {
    up: async ({context: queryInterface}: MigrationContext) => {
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
        })
    },
    down: async ({context: queryInterface} : MigrationContext) => {
        await queryInterface.dropTable('note');
    },
}
