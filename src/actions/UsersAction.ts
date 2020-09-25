import { getRepository } from "typeorm"
import Users from "../entities/Users"

interface IUsers {
  username: string,
  password: string
}

export default class UsersAction {

  static async login(username: string, password: string) {

    try {

      const result = await getRepository(Users)
        .createQueryBuilder('Users')
        .where('username = :username and password = :password', { username, password })
        .getOne()

      if (result) {
        return result
      } else {
        return {
          message: 'User not found!',
          code: 401,
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

  static async delete(id: Number) {

    try {

      const result = await getRepository(Users)
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where('id = :id', { id })
        .execute()

      if (result) {
        return {
          message: 'User deleted!',
          status: 200,
        }
      }
    } catch (error) {
      throw error
    }
  }

}