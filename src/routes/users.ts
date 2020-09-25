import UsersController from '../controllers/usersController'
import express from 'express'

const router = express.Router()

router.get('/:id?', (req, res) => UsersController.UsersFind(req, res))
router.put('/create', (req, res) => UsersController.UsersCreate(req, res))

export default router