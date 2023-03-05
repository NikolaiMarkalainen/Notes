const Sequelize = require('sequelize')
const { Umzug, SequelizeStorage }= require('umzug')
const config = require('./config')


// creating sequelize function with necessary variables
// to create a connection to my database

const sequelize = new Sequelize(
    config.NAME, 
    config.USER, 
    config.PASSWORD, 
    {
        host: config.HOST,
        dialect: 'postgres',
        port: config.DB_PORT
    });
// > docker exec -it db psql -U postgres -d db_name

const connectToDatabase = async () => {
        try{
            await sequelize.authenticate();
            console.log(' Connected to database ');
        } catch (err) {
            console.log(' Failed to connect to database ');
            return process.exit(1);
        }
        return null
}


module.exports = {
    connectToDatabase
}