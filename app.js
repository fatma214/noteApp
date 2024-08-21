import express from 'express'
import { dbConnection } from './database/models/dbConnection.js'
import userRoutes from './src/modules/users/user.routes.js'
import noteRouts from './src/modules/notes/notes.routes.js'
import sendOurEmail from './src/util/sendEmail.js'

const app = express()
const port = 3000

app.use(express.json())

dbConnection
app.use(userRoutes)
app.use(noteRouts)
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))