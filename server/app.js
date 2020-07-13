require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001
const router = require('./routers')



app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(router)
app.listen(PORT, () => console.log('Test Server'))