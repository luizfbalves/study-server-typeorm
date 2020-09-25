import UsersController from '../controllers/usersController'
import express from 'express'

const router = express.Router()

router.post(
  '/login',
  (req, res) => UsersController.login(req, res)
)

router.get(
  '/:id?',
  (req, res) => UsersController.usersFind(req, res)
)

router.put(
  '/create',
  (req, res) => UsersController.usersCreate(req, res)
)

router.delete(
  '/delete/:id',
  (req, res) => UsersController.usersDelete(req, res)
)

export default router