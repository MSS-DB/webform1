import {Router} from "express"

const router: Router = Router()

router.get('/', (req, res) => {
  res.send('API Server')
})

import auth from "./auth"
router.use('/auth', auth)

import api from "./api"
router.use('/api', api)

export default router
