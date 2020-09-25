import UsersAction from '../actions/UsersAction'
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
interface IUsers {
  username: string,
  password: string
}

export default class Users {

  static async login(req: Request, res: Response) {
    try {
      const { username, password }: IUsers = req.body

      const result = await UsersAction.login(username, password)

      if (result) {
        const token = jwt.sign({ username, password }, String(process.env.SECRET))

        return res.json({ token })
      }


    } catch (error) {
      return res.status(401).json({
        message: "User not found!",
        code: 401,
        error: error
      })
    }
  }

  static async usersFind(req: Request, res: Response) {
    try {
      const { id } = req.params

      return res.json(await UsersAction.find(id))

    } catch (error) {
      return res.status(400).json({
        message: "find users failure!",
        code: 400,
        error: error
      })
    }
  }

  static async usersCreate(req: Request, res: Response) {
    try {
      const data: IUsers = req.body

      return res.json(await UsersAction.create(data))

    } catch (error) {
      return res.status(400).json({
        message: "create user failure!",
        code: 400,
        error: error
      })
    }
  }

  static async usersDelete(req: Request, res: Response) {
    try {
      const { id } = req.params

      return res.json(res.json(await UsersAction.delete(Number(id))))

    } catch (error) {

    }
  }


}