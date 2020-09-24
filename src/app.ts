import express, { Request, Response, Express } from 'express'
import { createConnection } from "typeorm";
import routes from './routes'
import cors from 'cors'

var app: Express

createConnection().then(() => {

  const app = express()
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(cors())

  app.listen(3333)

  app.use('/', routes)

  app.get('/', (req: Request, res: Response) => res.send('api working!!!'))
})

export default app