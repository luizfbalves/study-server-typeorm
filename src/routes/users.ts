import UsersACtion from '../actions/UsersAction'
import UsersController from '../controllers/usersController'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => UsersController.find(req, res))

export default router