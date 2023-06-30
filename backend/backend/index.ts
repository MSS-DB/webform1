import express, { Express } from "express"
import {config} from "dotenv"
import "reflect-metadata"
import cookieParser from "cookie-parser"
import logger from "morgan"
import session from "express-session"
import "body-parser"

// Node Environment
config()

// Database init
import "./src/database"

// Routes
// import router from "./src/routes";
const {TOKEN_SECRET = '', PORT = '8000'} = process.env

const app: Express = express()
const port: number = parseInt(PORT)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

// Connect session
app.use(
    session({
      secret: TOKEN_SECRET,
      resave: true,
      saveUninitialized: true,
      rolling: true,
      cookie: {
        httpOnly: false,
        maxAge: 31_536_000,
      },
    }),
)

// Listen on port
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

// Routes
import router from './src/routes'
app.use('/', router)
