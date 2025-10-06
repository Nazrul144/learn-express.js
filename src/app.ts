import express, { type Application, type Request, type Response } from 'express'
import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url'

// Manually define __dirname for ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app: Application = express()

app.use(express.json())
const filePath = path.join(__dirname, "../db/todo.json")

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to todos app!!')
})
app.get('/todos', (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, {encoding: "utf-8"})
  console.log(data)
  res.json(data)
})
app.post('/todos/create-todo', (req: Request, res: Response) => {
  const {title, body} = req.body;
  console.log(title, body)
  res.send('Hello World..!!!!!')
})

export default app;




/*
**Basic File structure**
-server file: server handling like : staring, closing, error handling of server.
-app file: routing handling, middleware,, route related error.
-app folder: app business logic handling like create, read, update, delete, databased related works. 
*/