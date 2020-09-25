import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

const auth = (req: Request, res: Response, next: Function) => {

  const authHeader = req.headers.authorization

  if (authHeader) {

    jwt.verify(authHeader, process.env.SECRET, (err, user) => {

      if (user) {

        next()

      } else {

        return res.status(403).json({
          message: 'Invalid token!',
          code: 403,
          error: err
        })

      }
    })

  } else {

    return res.status(403).json({
      message: 'Token not provided!',
      code: 403
    })

  }
}

export default auth