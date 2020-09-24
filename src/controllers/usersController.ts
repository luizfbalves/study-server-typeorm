import UsersAction from '../actions/UsersAction'
import { Request, Response } from "express";
import { TsJestTransformer } from 'ts-jest/dist/ts-jest-transformer';

interface IUsers {
  username: string,
  password: string,
  created_at: Date
}

export default class Users {

  static async findUsers(req: Request, res: Response) {
    try {

      return res.json(await UsersAction.find())

    } catch (error) {
      return res.status(400).json({
        message: "find users failure!",
        code: 400,
        error: error
      })
    }
  }

  static async createUsers(req: Request, res: Response) {
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
}