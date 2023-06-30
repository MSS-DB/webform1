import DbApp, {User} from "../../database"
import {compareSync} from "bcrypt"
import {NextFunction, Request, Response} from "express"
import {CODE} from "../../config"
import {generateToken, verifyToken} from "./token"
import {Token} from "../../database/entity/Token"
import {Repository} from "typeorm"

const signup = async (username: string, email: string, password: string): Promise<{ error: Error | undefined, user: object | undefined }> => {
  try {
    const user = await DbApp.manager.findOneBy(User, {email})

    // Respond error if account found
    if (user) {
      return {error: new ReferenceError("User exists"), user}
    }

    // Create user with email and password
    const newUser: User = new User()

    newUser.displayName = username
    newUser.email = email
    newUser.password = password

    await DbApp.getRepository(User).save(newUser)

    return {error: undefined, user: {username, email, createdAt: newUser.createdAt}}
  } catch (e) {
    console.log(e)
    return {error: new ReferenceError("User creation problem"), user: undefined}
  }
}
const login = async (email: string, password: string): Promise<{ error: Error | undefined, user: object }> => {
  try {
    // Check username and password inside DB
    const userRepo: Repository<User> = DbApp.getRepository(User)
    const user = await userRepo.findOneBy({email})

    // No email found
    if (!user) {
      return {error: new ReferenceError("No user found"), user: {}}
    }

    // Password not correct
    const correctPassword = compareSync(password, user.password)
    if (!correctPassword) {
      return {error: new ReferenceError("Wrong password"), user: {}}
    }

    // Successful login
    const {pfNo, displayName, picture} = user

    // Generate token
    const token = generateToken({email})

    // Store token in DB
    let tokenEntity: Token | null = await DbApp.manager.findOneBy(Token, {email})
    if (!tokenEntity) {
      tokenEntity = DbApp.manager.create(Token, {email, token})
    }
    tokenEntity.token = token
    tokenEntity.active = true
    await DbApp.manager.save(tokenEntity)

    return {
      error: undefined,
      user: {pfNo, displayName, email, picture, token}
    }
  } catch (error) {
    return {error: error as Error, user: {}}
  }
}

const logout = async (token: string | undefined): Promise<{ error: Error | undefined }> => {
  if (!token) {
    return {
      error: new Error("No login session")
    }
  }
  // Check if user login session is stored
  const tokenEntity: Token | null = await DbApp.manager.findOneBy(Token, {token})
  if (!tokenEntity) {
    return {
      error: new Error("Invalid user credential")
    }
  }

  // Deactivate token
  tokenEntity.active = false
  await DbApp.manager.save(tokenEntity)
  return {error: undefined}
}

const authorizeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization
  // Reject all requests without a token
  if (!token) {
    return res.status(CODE.CLIENT_ERROR.UNAUTHORIZED).json({message: "Unauthorized"})
  }

  // Check token validity
  const {email} = verifyToken(token)
  if (!email) {
    return res.status(CODE.CLIENT_ERROR.UNAUTHORIZED).json({message: "Token expired"})
  }
  Object.assign(req, {email})
  next()
}

export {signup, login, logout, authorizeMiddleware}
