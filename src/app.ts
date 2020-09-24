import express, { Request, Response, Express } from 'express'
import { createConnection } from "typeorm";

createConnection().then()

const app = express()

app.get('/', (req: Request, res: Response) => res.send('api working!!!'))

export default app