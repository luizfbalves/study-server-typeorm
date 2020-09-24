import { getRepository } from "typeorm"
import { Request, Response } from "express";
import { Users } from "../entity/Users"

export default class UsersAction {

  static async find(req: Request, res: Response) {
    try {

      return res.json(await getRepository(Users).find())

    } catch (error) {
      throw error
    }
  }

}