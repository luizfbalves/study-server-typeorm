import UsersAction from '../actions/UsersAction'
import { Request, Response } from "express";

export default class Users {

  static async find(req: Request, res: Response) {
    try {

      return await UsersAction.find(req, res)

    } catch (error) {
      return res.status(400).json(error)
    }
  }

}