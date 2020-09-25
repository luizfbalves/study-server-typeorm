import { getRepository } from "typeorm"
import Users from "../entities/Users"

interface IUsers {
  username: string,
  password: string
}

export default class UsersAction {

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

  static async find(id?: string) {
    try {

      return id ? await getRepository(Users).findOne(id) : await getRepository(Users).find()

    } catch (error) {
      throw error
    }
  }

}