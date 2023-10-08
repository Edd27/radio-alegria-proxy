import express from 'express'
import { transmissionProxy } from './middlewares/transmission.proxy.js'

const app = express()
const port = process.env.PORT || 3000

app.get('/live', transmissionProxy)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
