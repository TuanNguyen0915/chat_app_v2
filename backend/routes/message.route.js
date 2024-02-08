import { Router } from "express";
import * as messageCtrl from "../controllers/message.controller.js"


const router = Router()

router.post("/send/:id", messageCtrl.sendMessage)

export {router}