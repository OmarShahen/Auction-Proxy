const express = require('express')
const config = require('./config/config')
const morgan = require('morgan')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
const itemService = require('./services/item')

const app = express()

// middlewares

app.use(morgan('dev'))
app.use(cors())

// services

itemService(app)

app.listen(config.PORT, () => console.log(`server started on port ${config.PORT} [${config.SERVICE}]`))

