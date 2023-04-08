import express from 'express';
import NotFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddlrware from './middleware/error-handler.js';

const app = express();

//middleware

app.get('/', (req, res) => {
  res.send("welcome")
})

app.use(NotFoundMiddleware)
app.use(errorHandlerMiddlrware)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is listening on port ${port} ...`)
})