const config = require('../config/config')
const { createProxyMiddleware } = require('http-proxy-middleware')
const serviceFinder = require('./service-finder')

const auth = (app) => {

    const service = serviceFinder('auth-service')

    const options = {
        target: `${service.API_SERVICE_URL}:${service.PORT}`,
        changeOrigin: true
    }

    app.use(`/api/${service.SERVICE}`, createProxyMiddleware(options))
}

module.exports = auth