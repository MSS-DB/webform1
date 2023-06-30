import {Request, Response, Router} from "express"
import {config} from 'dotenv'
import {signup, login, logout} from "../../helper/auth"
import {CODE} from "../../config"

config()
const router: Router = Router()

// Register
router.post('/signup', async (req: Request, res: Response) => {
  const {username, email, password} = req.body

  //@TODO: Validate email

  // Create email
  const {
    user,
    error
  }: { user: object|undefined, error: Error | undefined } = await signup(username, email, password)

  if (error) {
    res.status(CODE.CLIENT_ERROR.UNAUTHORIZED).json({
      success: false,
      error: error.message,
    })
  } else {
  res.json({
    success: true,
    user,
  })
}
})

// Login
router.post('/login', async (req: Request, res: Response) => {
  const {email, password} = req.body
  const {
    user,
    error
  }: { user: object, error: Error | undefined } = await login(email, password)

  if (error) {
    res.status(CODE.CLIENT_ERROR.UNAUTHORIZED).json({
      success: false,
      error: error.message,
    })
  } else {
    res.json({
      success: true,
      user,
    })
  }
})

router.post('/logout', async (req: Request, res: Response) => {
  const token = req.headers.authorization
  const {error} = await logout(token)

  if (error) {
    res.status(CODE.CLIENT_ERROR.UNAUTHORIZED).json({
      success: false,
      error: error.message,
    })
  } else {
    res.json({success: true,})
  }
})

export default router
