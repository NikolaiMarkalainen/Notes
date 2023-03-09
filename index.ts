const express = require('express')
const cors = require('cors')
import {Noterouter} from './controllers/notes'
const { PORT } = require('./utils/config');
const {connectToDatabase} = require('./utils/db')
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/notes', Noterouter);


const start = async () => {
    await connectToDatabase()
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
}

start()

export default app

