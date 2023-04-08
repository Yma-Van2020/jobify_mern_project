import express from 'express';
import NotFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddlrware from './middleware/error-handler.js';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

dotenv.config();
const app = express();

//middleware

app.get('/', (req, res) => {
  res.send("welcome")
})

app.use(NotFoundMiddleware)
app.use(errorHandlerMiddlrware)

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