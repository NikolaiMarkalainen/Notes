require('dotenv').config()

module.exports = {
    USER: process.env.DB_USER,
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    PORT: process.env.PORT
}