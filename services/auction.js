const config = require('../config/config')
const { createProxyMiddleware } = require('http-proxy-middleware')
const serviceFinder = require('./service-finder')


const auctions = (app) => {

    const service = serviceFinder('auction-service')

    const options = {
        target: `${service.API_SERVICE_URL}:${service.PORT}`,
        changeOrigin: true
    }

    app.use(`/api/${service.SERVICE}`, createProxyMiddleware(options))
}

module.exports = auctions
