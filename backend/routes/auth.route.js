import { Router } from 'express'
import * as authCtrl from '../controllers/auth.controller.js'
const router = Router()

router.get('/login', authCtrl.login)

export { router }
