import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongoDB/connect.js'
import postRoutes from './Routes/postRoutes.js'
import dalleRoutes from './Routes/dalleRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
  res.send('Hello from Dall-E!')
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(5000, () =>
      console.log('server is running on port http://localhost:5000'),
    )
  } catch (error) {
    console.log(error)
  }
}
startServer()
