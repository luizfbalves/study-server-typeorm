import UsersController from '../controllers/usersController'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => UsersController.findUsers(req, res))
router.put('/create', (req, res) => UsersController.createUsers(req, res))

export default router