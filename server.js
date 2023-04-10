import express from 'express';
import NotFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';
import 'express-async-errors'
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'
// import cors from 'cors'

// app.use(cors())

dotenv.config();
const app = express();

//get the json data
app.use(express.json())

app.get('/', (req, res) => {
  res.send("welcome")
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(NotFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port} ...`)
    })
  }
  catch(error) {
    console.log(error)
  }
} 
start()