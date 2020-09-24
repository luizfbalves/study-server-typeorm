import app from './app'
import routes from './routes'
import express from 'express'
import cors from 'cors'

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(3333, () => console.log('running...'))