const app = require('./app')
const http = require('http')
const { PORT } = require('./utils/config')

const server = http.createServer(app)

const start = async () => {
    console.log('Connection attempt')
    await require('./utils/db').connectToDatabase();
        server.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    })
}
start()