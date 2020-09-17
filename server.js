const express = require('express')
const cors = require('cors')
const router = require('./router')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// App
const app = express()

// Settings
app.disable('x-powered-by')

// Middlewares
app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

// Listen to port
const PORT = process.env.PORT || 2608
app.listen(
    PORT,
    () => console.log(`Server running at port ${PORT}`)
)
