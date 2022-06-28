const express = require('express')
const config = require('./config/config')
const morgan = require('morgan')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
const authService = require('./services/auth')
const itemService = require('./services/item')
const auctionService = require('./services/auction')

const app = express()

// middlewares

app.use(morgan('dev'))
app.use(cors())

// services

authService(app)
itemService(app)
auctionService(app)

app.listen(config.PORT, () => console.log(`server started on port ${config.PORT} [${config.SERVICE}]`))

