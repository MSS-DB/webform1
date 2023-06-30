import {sign, verify, JwtPayload} from "jsonwebtoken"
import {config} from "dotenv"

config()

const TOKEN_SECRET = process.env.TOKEN_SECRET || ""

const generateToken = (data: JwtPayload): string => sign(data, TOKEN_SECRET, {expiresIn: "7d"})

const verifyToken = (token: string): JwtPayload => {
  const data = verify(token, TOKEN_SECRET)
  return data as JwtPayload
}

export {generateToken, verifyToken}
