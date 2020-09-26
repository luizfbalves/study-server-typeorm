import UsersController from '../controllers/usersController'
import express from 'express'
import auth from '../middlewares/authentication'

const router = express.Router()

router.post(
  '/login',
  (req, res) => UsersController.login(req, res)
)

router.get(
  '/:id?',
  auth,
  (req, res) => UsersController.usersFind(req, res)
)

router.put(
  '/create',
  auth,
  (req, res) => UsersController.usersCreate(req, res)
)

router.delete(
  '/delete/:id',
  auth,
  (req, res) => UsersController.usersDelete(req, res)
)

export default router