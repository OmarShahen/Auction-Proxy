module.exports = {

    PORT: 3000,
    SERVICE: 'proxy',
    SERVICES: [
        {
            SERVICE: 'item-service',
            API_SERVICE_URL: 'http://159.223.99.196',
            PORT: 3002
        },
        {
            SERVICE: 'auth-service',
            API_SERVICE_URL: 'http://159.223.99.196',
            PORT: 3001
        },
        {
            SERVICE: 'auction-service',
            API_SERVICE_URL: 'http://159.223.99.196',
            PORT: 3003
        }
    ]
}