import { getRepository } from "typeorm"
import { Request, Response } from "express";
import Users from "../entities/Users"

interface IUsers {
  username: string,
  password: string,
  created_at: Date
}

export default class UsersAction {

  static async find() {
    try {

      return await getRepository(Users).find()

    } catch (error) {
      throw error
    }
  }

  static async create(data: IUsers) {
    try {

      const result = await getRepository(Users)
        .createQueryBuilder()
        .insert()
        .into(Users)
        .values(data)
        .execute()

      if (result) {
        return {
          message: 'User created!',
          status: 201,
          id: result.identifiers
        }
      }

    } catch (error) {
      throw error
    }
  }

}