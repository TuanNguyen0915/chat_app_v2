import "dotenv/config"
import express from 'express'
import cookieParser from 'cookie-parser'
import './config/database.js'

import { router as authRouter } from "./routes/auth.route.js"
import { router as messageRouter} from "./routes/message.route.js"
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/message', messageRouter)

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
