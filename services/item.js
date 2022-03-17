const config = require('../config/config')
const { createProxyMiddleware } = require('http-proxy-middleware')
const serviceFinder = require('./service-finder')


const items = (app) => {

    const service = serviceFinder('item-service')

    const options = {
        target: service.API_SERVICE_URL,
        changeOrigin: true
    }

    app.use(`/api/${service.SERVICE}`, createProxyMiddleware(options))
}

module.exports = items
