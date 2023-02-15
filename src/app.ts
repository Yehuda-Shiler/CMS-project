import { config } from 'dotenv'
import express from 'express'
import { router } from './routes/routes'
import { activeDB } from './utils/mongoClient'

config()
void activeDB()
const port: string = process.env.port ?? '3000'

const app: express.Application = express()
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
  console.log('[server]: Server is running at http://localhost:' + port)
})

module.exports = express
