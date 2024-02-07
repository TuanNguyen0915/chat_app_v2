import "dotenv/config"
import express from 'express'
import cookieParser from 'cookie-parser'

import { router as authRouter } from "./routes/auth.route.js"

const app = express()
const PORT = process.env.PORT || 3000


app.use('/api/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})
