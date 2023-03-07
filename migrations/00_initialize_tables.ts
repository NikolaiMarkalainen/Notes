/*import { DataTypes } from "sequelize"

module.exports = {
    up: async ({ context: queryInterface}) => {
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
    down: async ({ context: queryInterface }) => {
        await queryInterface.dropTable('note');
    },
}
*/