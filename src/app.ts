import express, { type Application, type Request, type Response } from 'express'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World..!!')
})

export default app;




/*
**Basic File structure**
-server file: server handling like : staring, closing, error handling of server.
-app file: routing handling, middleware,, route related error.
-app folder: app business logic handling like create, read, update, delete, databased related works. 
*/