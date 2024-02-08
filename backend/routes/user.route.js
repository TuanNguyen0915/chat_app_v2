import { Router } from 'express'
import checkAuth from '../middleware/checkAuth.js'
import * as userCtrl from '../controllers/user.controller.js'

const router = Router()

router.get('/', checkAuth, userCtrl.getUsers)

export { router }
