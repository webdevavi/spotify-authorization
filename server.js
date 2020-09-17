const express = require('express')
const cors = require('cors')
const router = require('./router')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const app = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

const PORT = process.env.PORT || 2608
app.listen(
    PORT,
    () => console.log(`Server running at port ${PORT}`)
)
