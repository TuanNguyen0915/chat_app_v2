import { Router } from 'express'
import checkAuth from '../middleware/checkAuth.js'
import * as messageCtrl from '../controllers/message.controller.js'

const router = Router()
router.get("/:id", checkAuth, messageCtrl.getMessages)
router.post('/send/:id', checkAuth, messageCtrl.sendMessage)

export { router }
