const express = require('express')
const cors = require('cors')
const noteRouter = require('./controllers/notes');

const app = express()
app.use(express.json())
app.use(cors)

app.use('/api/notes', noteRouter);



export default app

